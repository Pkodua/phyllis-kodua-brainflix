const express = require("express");
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
app.use(express.json());

// start the server and listen on port 5000
app.listen(PORT, () =>{});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const vidRoutes = require("./routes/videos.js");
app.use("/videos", vidRoutes);

