const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.get('/',(_req,res) => {
    res.send("Hello world");
});
// start the server and listen on port 5000
app.listen(PORT, () =>{});