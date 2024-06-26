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

/*
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.API_KEY 
});

const chatCompletion = openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [{"role": "user", "content": "Hello!"}],
});
console.log(chatCompletion);
*/

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

app.get('/getArticle/:id', async (req, res) => {
  const client = new faunadb.Client({
      secret: process.env.VITE_FAUNADB_KEY,
    });

  const id = req.params.id;

  console.log(id);

  const response = await client.query(
    q.Get(q.Match("getArticle", id))
  )
  res.send(JSON.stringify(response.data));
});

app.get('/getKnowledge', async (req, res) => {
  const client = new faunadb.Client({
    secret: process.env.VITE_FAUNADB_KEY,
  });

const response = await client.query(
    q.Map(
      q.Paginate(q.Match(q.Index('getKnowledge'))),
      q.Lambda('objectRef', q.Get(q.Var('objectRef')))
    )
  );
res.send(JSON.stringify(response.data));
})

app.listen(port, () => {
    console.log("The server is online.");
});