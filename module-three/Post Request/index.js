const express = require("express");
const app = express();

app.use(express.json());

app.post("/students/:id", (req, res) => {
    if(req.headers["api_key"] !== "1234"){
        return res.send("Error, not matching api key");
    }

    console.log(req.params.id);
    console.log(req.query.age);
    const { name, age, location, pass } = req.body;
    console.log(name, age, location, pass);
    console.log(req.headers["token"]);
    res.send("Completed");
})

app.listen(4000, () => {
    console.log("Started");
})