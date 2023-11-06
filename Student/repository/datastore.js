const { v4: uuid } = require('uuid');

const students = [
        {"id": uuid(), "Name": "Syed Muhammad Danish"},
        {"id": uuid(), "Name": "Syed Noman Haider"},
        {"id": uuid(), "Name": "Syed Shayan Haider"},
        {"id": uuid(), "Name": "Syed Ruslan Haider"},
    ];  

module.exports = students;