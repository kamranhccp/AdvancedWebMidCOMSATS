const students = require("../repository/datastore");

const viewStudents =  (req,res)=> {
    res.send(students);
}

module.exports = viewStudents;