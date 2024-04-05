<script setup>
import {ref} from "vue";

const article = ref([]);

import axios from "axios";

async function getArticle()
{
  const response = await axios.get(
    `http://localhost:3000/getArticle/1`,
    {
      headers: 
      {
        'Content-Type': 'application/json',
      },
    },
  )

  article.value = response.data;
}

getArticle();
</script>

<template>
  <div id="container">
    <h1>
        {{ article.title }}
    </h1>
    <p>
        Artificial Intelligence (AI) refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, language understanding, and decision-making. AI systems are designed to analyze vast amounts of data, recognize patterns, and adapt their behavior accordingly. AI techniques include machine learning, deep learning, natural language processing, computer vision, and robotics, among others. AI has applications in various fields such as healthcare, finance, education, transportation, entertainment, and more, and it continues to advance rapidly, shaping the way we live and work.
    </p>
  </div>
</template>

<style scoped>
    #container 
    {
      width:100vw;
      height:80vh;
      background-color:var(--color1);
      font-family:var(--font1);
      overflow-y:scroll;
    }
    p 
    {
        font-size:18px;
        line-height:1.5;
        text-align:justify;
    }
    @media screen and (max-width:600px)
    {
        h1, p 
        {
            width:90vw;
            margin-left:5vw;
        }
    }
    @media screen and (min-width:600px)
    {
        h1, p 
        {
            width:60vw;
            margin-left:20vw;
        }
    }
</style>
