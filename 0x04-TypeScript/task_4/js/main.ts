/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />

export const cpp = new Subjects.Cpp;
export const java = new Subjects.Java;
export const react = new Subjects.React;
export const cTeacher: Subjects.Teacher = {
    firstName: 'Dereck',
    lastName: 'Webb',
    experienceTeachingC: 10,
}

console.log('C++');
cpp.setTeacher(cTeacher);
cpp.getRequirements();
cpp.getAvailableTeacher();

console.log('Java');
java.setTeacher(cTeacher);
java.getRequirements();
java.getAvailableTeacher();

console.log('React');
react.setTeacher(cTeacher);
react.getRequirements();
react.getAvailableTeacher();
