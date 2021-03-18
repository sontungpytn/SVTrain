'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Batch extends Model {
  defect_classes() {
    return this.belongsToMany('App/Models/DefectClass',
      'batch_no', 'defect_classes_no', 'no', 'no')
      .pivotTable('image_defect_classes')
      .withPivot(['file_name'])
  }
}

module.exports = Batch;
