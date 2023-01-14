/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCity(list, city, newGrades) {
  if (!Array.isArray(list)) {
    return [];
  }
  const gradeList = list.filter((student) => student.location === city);
  return gradeList.map((student) => {
    const studentGrade = newGrades.filter((kid) => kid.studentId === student.id)[0];
    if (studentGrade) {
      student.grade = studentGrade.grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });
}
