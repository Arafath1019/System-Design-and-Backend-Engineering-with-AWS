const express = require("express");
const db = require("./db");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    db.query("SELECT NOW()", (err, result) => {
        if(err){
            console.log("Error execution query" ,err.stack);
            res.status(500).send("Internal server error");
        } else {
            res.send("Current time" + result.rows[0].now);
        }
    })
})

app.get("/students", (req, res) => {
    db.query("SELECT * FROM person", (err, result) => {
        if(err){
            res.status(500).send("Internal server error");
        } else {
            res.send(result.rows);
        }
    })
})


app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})