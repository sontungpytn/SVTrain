'use strict';
const Workspace = use('App/Models/Workspace');
const WorkSpaceSetting = use('App/Models/WorkSpaceSetting');
const DefectClass = use('App/Models/DefectClass');
const Batch = use('App/Models/Batch');
const Env = use('Env');

const {readDirRecursive, getAttributes, getJsonConfig} = require('../../utils/index');
const {uniq} = require('lodash');
const fs = require('fs');
const path = require('path');
const uuid4 = require('uuid4');
const Queue = use('Rabbit/Queue');
Queue.openConnection();
const Config = use('Config');

class ConvertToDatabaseController {
  async index({request}) {
    let workSpace = request.post().workspace;
    let createdWorkspace = await Workspace.findOrCreate(
      getAttributes(workSpace, ['name', 'notes', 'highlight_note']),
      getAttributes(workSpace, ['name', 'notes', 'highlight_note'])
    );
    let wsNo = createdWorkspace.no || createdWorkspace.id;
    // insert workspace setting
    let configPath = path.join(workSpace.path, '.cfg');
    let workSpaceSetting = getJsonConfig(configPath);
    let imageStorageDir;
    if (workSpaceSetting) {
      imageStorageDir = path.join(workSpace.path, workSpaceSetting.defaultImageStorage);
      if (!fs.existsSync(imageStorageDir)) {
        await fs.mkdirSync(imageStorageDir);
      }
      workSpaceSetting = {...workSpaceSetting, ...{configPath: configPath, path: workSpace.path}};
      await WorkSpaceSetting.findOrCreate(
        {
          work_space_no: wsNo,
          name: `${createdWorkspace.name}_config`,
          value: JSON.stringify(workSpaceSetting)
        },
        {work_space_no: wsNo, name: `${createdWorkspace.name}_config`, value: JSON.stringify(workSpaceSetting)}
      );
    }
    // read image from dir
    let data = readDirRecursive({
      path: workSpace.path,
      extensions: ['.jpg', '.png', '.jpeg']
    });
    let defectClasses = uniq(data.map(item => item.defectClass));
    // insert to DefectClasses table
    for (let defectClass of defectClasses) {
      let createdClass = await DefectClass.findOrCreate({name: defectClass}, {name: defectClass});
      for (let element of data) {
        // create default batch
        let createdBatch = await Batch.findOrCreate(
          {
            work_space_no: wsNo,
            name: element.batchName,
            user: request.currentUser ? request.currentUser.username : 'defaultUser'
          },
          {
            work_space_no: wsNo,
            name: element.batchName,
            date: new Date(),
            user: request.currentUser ? request.currentUser.username : 'defaultUser'
          }
        );
        if (workSpaceSetting.defaultImageStorage && element.defectClass === createdClass.name) {
          let destinationImage = path.join(imageStorageDir, `${element.fileName}_${uuid4().toUpperCase()}${element.ext}`);
          await fs.copyFileSync(element.absolutePath, destinationImage);
          let temp = {
            batch_no: createdBatch.no || createdBatch.id,
            defect_classes_no: createdClass.no || createdClass.id,
            file_name: destinationImage
          };
          await Queue.addDataToQueue(Config.get('queue.name'), temp);
        }
      }
    }
    return {message: 'done'};
  }

  async getWorkspaces({request}) {
    let wsName = request.only(['ws_name']);
    let ws;
    if (wsName.ws_name && wsName.ws_name !== '')
      ws = await Workspace.query().where('name', wsName.ws_name).with('batches').with('settings').fetch();
    else
      ws = await Workspace.query().with('batches').with('settings').fetch();
    ws = ws.toJSON();
    for (const item of ws) {
      item.settings.value = JSON.parse(item.settings.value);
      item.config = item.settings.value;
      item.configPath = item.config.configPath;
      item.path = item.config.path;
      item.notesPath = path.join(path.dirname(item.path), 'notes.txt');
      item.highlight = item.highlight_note !== 0;
      if (item.batches.length)
        item.hasSubFolders = true;
      delete item.settings;
      delete item.config.configPath;
      delete item.config.path;
      delete item.highlight_note;
    }

    return ws;
  }

  async getFiles({request}) {
    let res = {folders: [], files: []};
    let ws_no = request.only(['ws_no']).ws_no;
    let files = [];
    if (ws_no) {
      let b = await Batch.query().where({
        work_space_no: ws_no
      }).with('defect_classes').fetch();
      b = b.toJSON();
      b.forEach(i => {
        files = files.concat(i.defect_classes.map(df => {
          let f_path = df.pivot.file_name;
          return {
            'batch_name': i.name,
            'path': f_path,
            'relativePath': path.relative(Env.get('ROOT_PATH'), f_path),
            'name': path.basename(f_path),
            'type': 'file',
            'image': true,
            'match': false
          };
        }));
      });
      res.files = files;
    }
    return res;
  }
}

module.exports = ConvertToDatabaseController;
