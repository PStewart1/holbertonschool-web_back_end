/* eslint-disable jest/require-hook */
// import util from 'util';
import * as redis from 'redis';

const client = redis.createClient();

// const getAsync = util.promisify(client.get).bind(client);

client.on('connect', () => console.log('Redis client connected to the server'));
client.on('error', (err) => console.log(`Redis client not connected to the server: ${err}`));
client.connect();

function createHash() {
  client.hSet('HolbertonSchools', 'Portland', 50, redis.print);
  client.hSet('HolbertonSchools', 'Seattle', 80, redis.print);
  client.hSet('HolbertonSchools', 'New York', 20, redis.print);
  client.hSet('HolbertonSchools', 'Bogota', 20, redis.print);
  client.hSet('HolbertonSchools', 'Cali', 40, redis.print);
  client.hSet('HolbertonSchools', 'Paris', 2, redis.print);
}

function displayHash() {
  client.hGetAll('HolbertonSchools', (err, reply) => {
    if (err) {
      console.error(err);
    } else {
      console.log(reply);
    }
  });
}

createHash();
displayHash();
