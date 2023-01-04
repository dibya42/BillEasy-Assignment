const express = require('express');
const employeeRoutes = require("./src/employee/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req,res) =>{
    res.send("Hello World");
});

app.use("/api/v1/employee", employeeRoutes)

app.listen(port, () => console.log(`app is running on port ${port}`))
