const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoute.js');
const app = express();
const PORT = 2000;

app.get("/", function (req, res) {
    try {
        res.send("Hello World");
        console.log("My first test API is working");
    } catch (error) {
        res.status(500).send("Server Error")
    }

        
    
});

app.use(express.json());
app.use("/api", userRouter)

app.listen(PORT, async function () {
    try {
       await connectDB();
       console.log("Listening to the port")

    } catch (error) {
        console.error(error.message);
    }
});