interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 18,
  location: 'Midtown High',
};

const student2: Student = {
  firstName: 'Mary-Jane',
  lastName: 'Watson',
  age: 18,
  location: 'Midtown High',
};

const studentsList: Array<Student> = [student1, student2];

console.table(studentsList, ['firstName', 'location']);
