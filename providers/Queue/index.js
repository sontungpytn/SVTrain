'use strict';
const amqp = require('amqplib/callback_api');
const lodash = require('lodash');
const ImageDefectClass = use('App/Models/ImageDefectClass');

class Queue {
  constructor(Config) {
    this.Config = Config;
    this.channel = {};
  }

  openConnection() {
    let URL = `amqp://${this.Config.get('queue.user')}:${this.Config.get('queue.password')}@${this.Config.get('queue.host')}:${this.Config.get('queue.port')}`;
    amqp.connect(URL, (err, conn) => {
      if (err) {
        // openConnection();
        console.log('Error when connect rabbitMQ %o', err);
      } else {
        conn.on('close', this.openConnection);
        conn.on('error', function (err) {
          console.log('Error occured in error event %o', err);
          // openConnection();
        });
        conn.createChannel((err, ch) => {
          ch.on('error', (err) => {
            console.log('Error when create channel %o', err);
          });
          console.log('open connection success');
          this.channel = ch;
        });
      }
    });
  }

  async addDataToQueue(queueName, data) {
    this.channel.assertQueue(queueName, {durable: true});
    if (lodash.isArray(data)) {
      await data.forEach(item => {
        if (lodash.isObject(item)) {
          this.channel.sendToQueue(queueName, Buffer.from(JSON.stringify(item)), {persistent: true});
        }
      });
      console.log(`Number of items which add to queue "${queueName}": `, data.length);
    } else if (lodash.isObject(data)) {
      await this.channel.sendToQueue(queueName, Buffer.from(JSON.stringify(data)), {persistent: true});
      console.log(`Number of items which add to queue "${queueName}": `, 1);
    } else {
      await this.channel.sendToQueue(queueName, Buffer.from(data), {persistent: true});
      console.log(`Number of items which add to queue "${queueName}": `, 1);
    }
  }

  async syncToDB(queueName) {
    // await this.openConnection();
    let URL = `amqp://${this.Config.get('queue.user')}:${this.Config.get('queue.password')}@${this.Config.get('queue.host')}:${this.Config.get('queue.port')}`;
    amqp.connect(URL, (err, conn) => {
      if (err) {
        // openConnection();
        console.log('Error when connect rabbitMQ %o', err);
      } else {
        conn.on('close', this.openConnection);
        conn.on('error', function (err) {
          console.log('Error occured in error event %o', err);
          // openConnection();
        });
        conn.createChannel((err, ch) => {
          ch.on('error', (err) => {
            console.log('Error when create channel %o', err);
          });
          console.log('open connection success');
          ch.prefetch(1);
          ch.assertQueue(queueName, {durable: true});
          ch.consume(queueName, async function (msg) {
            if (msg.content) {
              let defectImageClass = JSON.parse(msg.content.toString());
              console.log('defectImageClass ack: ', defectImageClass);
              ImageDefectClass.create(defectImageClass);
              ch.ack(msg);
            } else {
              // if (this.channel) await this.channel.close();
            }
          }, {
            noAck: false
          });
        });
      }
    });
  };
}

module.exports = Queue;
