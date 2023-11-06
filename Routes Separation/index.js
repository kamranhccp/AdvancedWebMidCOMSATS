const express = require("express");
const userRoutes = require("./Routes/users"); 
const taskRoutes = require("./Routes/tasks");

const app = express();
app.use("/user", userRoutes); 
app.use("/task", taskRoutes);

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
    console.log(`Listening to: ${PORT}`);
});
