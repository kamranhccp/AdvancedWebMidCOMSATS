
const students = require("../repository/datastore");


const addStudent = (req,res)=> {

    const student = req.body;

    const isStudent = students.find(e=> e.id === student.id);

    if(student != undefined && isStudent == undefined) {
        students.push(student);
        res.send("Student Added Successfully");
    }
    else {
        res.send("Student already there!");
    }

   
}

const updateStd = (req,res)=> {
    const id = req.params.id;
    const name = req.body.Name;

    const student = students.find(student => student.id === id);

    if(student != undefined) {
        student.Name = name;
    }

    res.send("Updated Successfully");
}

module.exports = {
    addStudent,
    updateStd,
}