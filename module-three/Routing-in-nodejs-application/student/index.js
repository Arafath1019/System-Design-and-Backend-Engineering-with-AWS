const express = require("express");
const db = require("../db");
const router = express.Router();

router.get("/all-students", (req, res) => {
    res.send("All students");
})

router.get("/", (req, res) => {
    db.query("SELECT NOW()", (err, result) => {
        if(err){
            console.log("Error execution query" ,err.stack);
            res.status(500).send("Internal server error");
        } else {
            res.send("Current time" + result.rows[0].now);
        }
    })
})

router.get("/students", (req, res) => {
    db.query("SELECT * FROM person", (err, result) => {
        if(err){
            res.status(500).send("Internal server error");
        } else {
            res.send(result.rows);
        }
    })
})

module.exports = router;