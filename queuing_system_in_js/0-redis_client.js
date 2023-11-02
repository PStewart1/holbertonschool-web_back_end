/* eslint-disable jest/require-hook */
import * as redis from 'redis';

const client = redis.createClient();
client.on('connect', () => console.log('Redis client connected to the server'));
client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));
client.connect();

// client.set('key', 'value');
// const value = client.get('key');
// client.disconnect();
