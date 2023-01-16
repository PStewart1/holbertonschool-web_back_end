var student1 = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 18,
    location: 'Midtown High'
};
var student2 = {
    firstName: 'Mary-Jane',
    lastName: 'Watson',
    age: 18,
    location: 'Midtown High'
};
var studentsList = [student1, student2];
console.table(studentsList, ['firstName', 'location']);
