/* eslint-disable jest/require-hook */
import * as redis from 'redis';

const client = redis.createClient();

client.on('connect', () => console.log('Redis client connected to the server'));
client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));
client.connect();

const subscriber = client.duplicate();

subscriber.on('message', (channel, message) => {
  console.log(message);
  if (message === 'KILL_SERVER') {
    subscriber.unsubscribe();
    subscriber.quit();
    client.quit();
  }
});

subscriber.subscribe('holberton school channel');
