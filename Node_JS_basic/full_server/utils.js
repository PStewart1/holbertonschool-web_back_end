// a function that accepts a file path as argument, reads the database asynchronously
// const fs = require('fs');
import fs from 'fs';
// const exports = require('webpack');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }
      const content = data.toString().split('\n');

      let students = content.filter((item) => item);

      students = students.map((item) => item.split(','));

      const result = {};
      for (const i in students) {
        if (i > 0) {
          if (!result[students[i][3]])result[students[i][3]] = [];
          result[students[i][3]].push(students[i][0]);
        }
      }
      resolve(result);
    });
  });
}

export default readDatabase;
