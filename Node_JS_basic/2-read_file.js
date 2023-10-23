// Reading a file synchronously with Node JS
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.filter((line) => line).map((line) => line.split(',')).slice(1);
    const NUMBER_OF_STUDENTS = students.length;
    const fields = {};
    for (const student of students) {
      const field = student[3];
      if (fields[field]) {
        fields[field].push(student[0]);
      } else {
        fields[field] = [student[0]];
      }
    }
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    for (const field in fields) {
      if (field) {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
