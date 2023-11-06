const express = require("express");
const userRouter = require("./routes/user");
const app = express();
const port = 4600;
const viewStudents = require("./controller/homeController")


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(port, ()=> {
    console.log(`Server is listening at ${port}`)
})


app.get("/",viewStudents);

app.use("/user", userRouter)



