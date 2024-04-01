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

app.get('/getArticles', async (req, res) => {
    const client = new faunadb.Client({
        secret: process.env.VITE_FAUNADB_KEY,
      });

    const response = await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index('getArticles'))),
          q.Lambda('articleRef', q.Get(q.Var('articleRef')))
        )
      );
    res.send(JSON.stringify(response.data));
  });

app.listen(port, () => {
    console.log("The server is online.");
});