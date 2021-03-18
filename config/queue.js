'use strict';

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env');

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
module.exports = {
  host: Env.get('RABBIT_HOST', 'localhost'),
  user: Env.get('RABBIT_USERNAME', 'guest'),
  password: Env.get('RABBIT_PASSWORD', 'guest'),
  port: Env.get('RABBIT_PORT', 5672),
  name: Env.get('RABBIT_QUEUE', 'images_defect_classes')
};
