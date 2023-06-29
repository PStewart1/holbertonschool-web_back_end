// Reading a file synchronously with Node JS 
const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  try {
    const stream = fs.createReadStream(path);
    const rl = readline.createInterface({ input: stream });
    const data = [];

    rl.on('line', (row) => {
      if (row.length > 0) {
        data.push(row.split(','));
      }
    });

    rl.on('close', () => {
      console.log(`Number of students: ${data.length - 1}`);
      const fields = {};
      for (let i = 1; i < data.length; i += 1) {
        if (data[i][3] in fields) {
          fields[data[i][3]].push(data[i][0]);
        } else {
          fields[data[i][3]] = [data[i][0]];
        }
      }
      for (const field in fields) {
        if (field) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
