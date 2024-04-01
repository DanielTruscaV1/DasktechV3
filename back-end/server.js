const express = require("express");
const cors = require('cors');
const faunadb = require('faunadb');
const bcryptjs = require('bcryptjs');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const port = 3000;
const q = faunadb.query;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
    console.log("The server is online.");
});