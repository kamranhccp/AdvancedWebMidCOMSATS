var userData = [
    {
      "id": 1,
      "name": "Qasim",
      "phone_number": "123-456-7890"
    },
    {
        "id": 2,
        "name": "Russi",
        "phone_number": "123-456-7890"
      },
      {
        "id": 3,
        "name": "Zaki Durr",
        "phone_number": "123-456-7890"
      },
];
  
const getRealUserInformation = (id)=>{
    let userObject = userData.find(user => user.id == id); 
    return userObject;
}

const deleteRealUserInformation = (id)=>{
    let prev = userData.length;
    userData = userData.filter(user => user.id != id); 
    return prev != userData.length;
}
const getAllUsers = () => {
    var data = "";
    for (let i = 0; i < userData.length; i++) {
        data = data +"\nID: "+ userData[i].id +" Name: "+ userData[i].name ;
    }
    return data;
}

module.exports = {getRealUserInformation,getAllUsers,deleteRealUserInformation};