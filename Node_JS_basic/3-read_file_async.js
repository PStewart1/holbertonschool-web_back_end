// Reading a file asynchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      if (data) {
        let count = 0;
        const fields = {};
        const students = data.split('\n');
        for (let i = 1; i < students.length; i += 1) {
          if (students[i]) {
            count += 1;
            const student = students[i].split(',');
            if (!fields[student[3]]) fields[student[3]] = [];
            fields[student[3]].push(student[0]);
          }
        }
        console.log(`Number of students: ${count}`);
        for (const field in fields) {
          if (field) {
            const list = fields[field];
            console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
          }
        }
      }
      resolve();
    });
  });
}

module.exports = countStudents;
