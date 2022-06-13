const express = require("express");
const app = express();
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;