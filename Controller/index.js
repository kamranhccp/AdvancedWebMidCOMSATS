// asic Node.js application using the Express.js framework 
// to create a simple RESTful API for managing user and task information.

const express = require("express"); // Import express
const userRoutes = require("./Routes/users"); // Import userRoutes
const taskRoutes = require("./Routes/tasks"); // Import taskRoutes

const app = express(); // Make express app
app.use("/user", userRoutes); // If accessing localhost:3000/user, it will go to userRoutes
app.use("/task", taskRoutes); // If accessing localhost:3000/task, it will go to taskRoutes

const PORT = process.env.PORT || 3000; // Make PORT variable

// Make server listen to PORT
app.listen(PORT, () => { 
    console.log(`Listening to: ${PORT}`);
});