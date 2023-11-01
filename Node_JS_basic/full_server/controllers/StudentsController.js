/* eslint-disable consistent-return */
import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let responseText = 'This is the list of our students\n';
        const fields = Object.keys(data).sort();
        fields.forEach((field) => {
          const students = data[field];
          responseText += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });
        response.status(200).send(responseText);
      })
      .catch((error) => {
        console.error('Error reading file:', error);
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    readDatabase(process.argv[2])
      .then((data) => {
        if (!data[major]) {
          return response.status(200).send('No students found for the specified major');
        }
        const students = data[major];
        const responseText = `List: ${students.join(', ')}`;
        response.status(200).send(responseText);
      })
      .catch((error) => {
        console.error('Error reading file:', error);
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
