/* eslint-disable jest/require-hook */
import * as redis from 'redis';

const client = redis.createClient();

client.on('connect', () => console.log('Redis client connected to the server'));
client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));
client.connect();

const publisher = client.duplicate();

function publishMessage(message, time) {
  setTimeout(() => {
    console.log('About to send', message);
    publisher.publish('holberton school channel', message);
  }, time);
}

publisher.connect();
publishMessage('Holberton Student #1 starts course', 100);
publishMessage('Holberton Student #2 starts course', 200);
publishMessage('KILL_SERVER', 300);
publishMessage('Holberton Student #3 starts course', 400);
