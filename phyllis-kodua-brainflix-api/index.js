const express = require("express");
const videosRouter = require("./routes/videos");
const cors = require("cors");

const port = process.argv[2] || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/videos", videosRouter);
app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});