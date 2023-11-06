const express = require("express");
const app = express();
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("TASK PAGE WELCOME");
});
router.get("/info:id",(req,res)=>{
    res.send(`Inforamtion User for id: ${req.params.id} `);
});
router.post("/update:id",(req,res)=>{
    res.send(`Update Profile for id: ${req.params.id} Body is: ${req.body}`);
});
router.delete("/delete:id",(req,res)=>{
    res.send(`Deleter Profile for id: ${req.params.id}`);
});

module.exports = router;