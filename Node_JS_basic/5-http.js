// Create a more complex HTTP server using Node's HTTP module
const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const file = process.argv.slice(2);

function countStudents(path) {
  let result = '';
  return fs.readFile(path, 'utf8')
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

// create a server object:
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  const q = url.parse(req.url, true);
  if (q.pathname === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (q.pathname === '/students') {
    res.write('This is the list of our students\n');
    countStudents(file[0], res).then((data) => {
      res.write(data);
      res.end();
    }).catch((error) => {
      res.write(error.message);
      res.end();
    });
  }
}).listen(1245);

module.exports = app;
