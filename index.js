const express = require("express");
const app = express();

app.get("/students", (req, res) => {
    const dept = req.query.dept;
    if (dept){
        return res.send("Department");
    } else {
        return res.send("Students");
    }
});

app.get("/students/:id", (req, res) => {
    const id = req.params.id;
    return res.send(id);
});

app.listen(4040, () => {
    console.log("Started");
})