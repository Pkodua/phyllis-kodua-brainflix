const express = require("express");
const vidFile = __dirname + "./routes/videos.js";
const videos = require(videosFile);
const router = express.Router();

const fs = require("fs");
const uuid = require("uuid/v4");

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
    }
  });
}

const getNewId = () => {
  return uuid();
};

const timestamp = () => {
  return Date.now();
};

module.exports = {
  writeJSONFile,
  getNewId,
  timestamp
};