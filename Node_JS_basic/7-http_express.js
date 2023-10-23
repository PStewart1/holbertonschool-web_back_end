// Create a more complex HTTP server using Express
const express = require('express');
const fs = require('fs').promises;

const path = process.argv.slice(2);

function countStudents(file) {
  let result = '';
  return fs.readFile(file, 'utf8')
    .then((data) => {
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
      result += `Number of students: ${count}\n`;
      for (const field in fields) {
        if (field) {
          const list = fields[field];
          result += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        }
      }
      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(path[0], res)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});

app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
});

module.exports = app;
