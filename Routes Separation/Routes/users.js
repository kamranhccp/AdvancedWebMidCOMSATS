const express = require("express");
const app = express();
const router = express.Router();
router.get("/",(req,res)=>{
    res.send("USER PAGE WELCOME");
});
router.get("/info:id",(req,res)=>{
    res.send(`Inforamtion User for id: ${req.params.id} `);
});
router.post("/:id",(req,res)=>{
    res.send(`Update User for id: ${req.params.id} Body is: ${req.body}`);
});
router.delete("/:id",(req,res)=>{
    res.send(`Deleter user for id: ${req.params.id}`);
});
module.exports = router;