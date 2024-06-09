const express = require("express");
const student = require("./student");
const app = express();

const PORT = 3000;

app.use("/api", student);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
})