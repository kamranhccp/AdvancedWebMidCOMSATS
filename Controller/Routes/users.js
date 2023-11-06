const express = require("express");
const userController = require('../controllers/userController');
const app = express();
const router = express.Router();    
router.get("/",(req,res)=>{
    res.send("USER PAGE WELCOME");
});
router.get("/info:id",(req,res)=>{
    const {id,name} = userController.getRealUserInformation(req.params.id);
    res.send(`Inforamtion User for id: ${req.params.id} ${name}`);
});
router.get("/all", (req, res) => {
    const allUsers = userController.getAllUsers();
    res.send(allUsers);
  });
router.post("/:id",(req,res)=>{
    res.send(`Update User for id: ${req.params.id} Body is: ${req.body}`);
});
router.get("/delete:id",(req,res)=>{//suppose it to be delete
    let isTrue = userController.deleteRealUserInformation(req.params.id);
    if(isTrue){
        res.send(`Success`);
    }
    else{
        res.send(`Failure`);
}
});
module.exports = router;