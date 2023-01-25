"use strict";
exports.__esModule = true;
var CRUD = require("./crud");
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
var updatedRow = { firstName: "Guillaume", lastName: "Salva", age: 23 };
var updatedID = CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(updatedID);
