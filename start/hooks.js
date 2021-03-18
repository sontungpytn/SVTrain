'use strict';

const {hooks} = require('@adonisjs/ignitor');

hooks.after.providersBooted(async () => {
  const Config = use('Config');
  const Queue = use('Rabbit/Queue');
  await Queue.syncToDB(Config.get('queue.name'));
});
