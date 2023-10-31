// a function that accepts a file path as argument, reads the database asynchronously
// const fs = require('fs');
import "fs";
// const exports = require('webpack');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8')
      .then(data => {
        const lines = data.split('\n');
        const result = {};
        for(let line of lines) {
          const [firstName, field] = line.split(',');
          if(result[field]) {
            result[field].push(firstName);
          } else {
            result[field] = [firstName];
          }
        }
        resolve(result);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default readDatabase;
