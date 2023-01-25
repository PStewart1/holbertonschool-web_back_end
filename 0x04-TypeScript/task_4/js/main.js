"use strict";
/// <reference path="subjects/Teacher.ts" />
/// <reference path="subjects/Subject.ts" />
/// <reference path="subjects/Cpp.ts" />
/// <reference path="subjects/React.ts" />
/// <reference path="subjects/Java.ts" />
exports.__esModule = true;
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
exports.cpp = new Subjects.Cpp;
exports.java = new Subjects.Java;
exports.react = new Subjects.React;
exports.cTeacher = {
    firstName: 'Dereck',
    lastName: 'Webb',
    experienceTeachingC: 10
};
console.log('C++');
exports.cpp.setTeacher(exports.cTeacher);
exports.cpp.getRequirements();
exports.cpp.getAvailableTeacher();
console.log('Java');
exports.java.setTeacher(exports.cTeacher);
exports.java.getRequirements();
exports.java.getAvailableTeacher();
console.log('React');
exports.react.setTeacher(exports.cTeacher);
exports.react.getRequirements();
exports.react.getAvailableTeacher();
