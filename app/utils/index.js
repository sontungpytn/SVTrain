// extend methods
Array.prototype.inArray = function (callback) {
  if (typeof callback === 'function') {
    return this.findIndex(callback) !== -1;
  }
  return this.indexOf(callback) !== -1;
};
const roles = require('../../roles.json');
const users = require('../../users.json');
const fs = require('fs');
const path = require('path');
const lodash = require('lodash');

const Env = use('Env');

function getRoles() {
  return roles;
}

function getUsers() {
  return users;
}

function matchRuleShort(str, rule) {
  var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
  return new RegExp('^' + rule.split('*').map(escapeRegex).join('.*') + '$').test(str);
}

function hasPermissionWorkspaces(folderName, workspaceRules) {
  if (!workspaceRules) return false;
  for (let ws of workspaceRules) {
    if (matchRuleShort(folderName, ws)) return true;
  }
  return false;
}

/**
 * @example
 * let data = {key: 'value1', key2: 2, key3: {subKey: 'subValue'}, key5: 'value_key_5'};
 *
 * getAttributes(data, ['key', 'key3']);
 * @return  result {key: 'value1', key3: {subKey: 'subValue'}};
 *
 * getAttributes(data, ['key', {key3: {key9: ''}}]);
 * @return  result {key: 'value1', key9: {subKey: 'subValue'}};
 *
 * getAttributes(data, ['key', {key4: {defaultKey: 'defaultValue'}}]);
 * @return  result {key: 'value1', key4: {defaultKey: 'defaultValue'}};
 *
 * getAttributes(data, ['key', {key4: {defaultKey: 'defaultValue'}}]);
 * @return  result {key: 'value1', key4: {defaultKey: 'defaultValue'}};
 *
 * getAttributes(data, ['key', {key5: lodash.camelCase}]);
 * @return  result {key: 'value1', key5: 'valueKey5'};
 *
 */
function getAttributes(data, keys) {
  let res = {};
  keys.forEach(key => {
    if (typeof key === 'string' && typeof data[key] !== 'undefined'
    ) {
      if (typeof data[key] === 'string') {
        return res[key] = data[key].trim();
      }
      return res[key] = data[key];
    }
    if (lodash.isObject(key)) {
      let objKey = Object.keys(key)[0];
      if (lodash.isFunction(key[objKey])) {
        return res[key[objKey](objKey)] = lodash.get(data, objKey);
      }
      if (lodash.isObject(key[objKey])) {
        let keys = Object.keys(key[objKey]);
        if (keys.length) {
          return res[keys[0]] = lodash.get(data, objKey, key[objKey][keys[0]]);
        }
      }
      return res[objKey] = lodash.get(data, objKey, key[objKey]);
    }
  });

  return res;
}

function removeExt(fileName) {
  return (fileName + '').replace(path.extname(fileName), '');
}

function getExt(fileName) {
  return path.extname(fileName + '').toLowerCase();
}

function readDirRecursive(options) {
  if (typeof options === 'string') {
    options = {path: options};
  }
  if (!options.path) {
    throw new Error('Path option is required.');
  }
  options = Object.assign({}, {
    extensions: ['.js'],
    excludes: ['.', '..']
  }, options);
  let results = [];
  fs.readdirSync(options.path)
    .forEach(file => {
      const fullFilePath = path.join(options.path, file);
      if (fs.statSync(fullFilePath).isDirectory()) {
        results = results.concat(readDirRecursive(Object.assign({}, options, {path: fullFilePath})));
        return;
      }
      if ((!options.extensions.length || options.extensions.inArray(path.extname(file))) && (!options.excludes.length || !options.excludes.inArray(file))) {
        let relativePath = path.relative(Env.get('ROOT_PATH'), fullFilePath);
        let temp = path.dirname(relativePath).split(path.sep);
        let workspace = temp.shift();
        let defectClass = temp.pop();
        let batchName = temp.join('.') === '' ? 'default' : temp.join('.');
        results.push({
          absolutePath: fullFilePath,
          relativePath: relativePath,
          workspace: workspace,
          defectClass: defectClass,
          batchName: batchName,
          fileName: removeExt(path.basename(fullFilePath)),
          ext: getExt(fullFilePath)
        });
      }
    });
  return results;
}

function getJsonConfig(path) {
  let cfg = {};
  try {
    if (fs.existsSync(path)) {
      const fileContent = fs.readFileSync(path, 'utf-8');
      cfg = JSON.parse(fileContent);
      if (cfg.hide === true) {
        cfg = {};
      }
    }
  } catch (e) {
    cfg = {};
  }
  return cfg;
}

module.exports.getUsers = getUsers;
module.exports.getRoles = getRoles;
module.exports.matchRuleShort = matchRuleShort;
module.exports.hasPermissionWorkspaces = hasPermissionWorkspaces;
module.exports.getAttributes = getAttributes;
module.exports.readDirRecursive = readDirRecursive;
module.exports.getJsonConfig = getJsonConfig;

