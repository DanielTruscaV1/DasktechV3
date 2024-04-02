<script setup>
import {ref} from "vue";

const articles = ref([]);

import axios from "axios";

async function getArticle()
{
  const response = await axios.get(
    `http://localhost:3000/getArticles`,
    {
      headers: 
      {
        'Content-Type': 'application/json',
      },
    },
  )

  articles.value = response.data;
}

getArticle();

import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

function go_to(path)
{
    router.push(`${path}`);
}

</script>

<template>
  <div id="container">
    <h1 id="title">
      Artificial Intelligence
    </h1>
    <div id="list">
      <div 
        v-for="article in articles"
        class="article" 
        @click="go_to('article')"
      >
        {{ article.data.id }}
      </div>
    </div>
  </div>
</template>

<style scoped>
    #container 
    {
      width:100vw;
      height:80vh;
      background-color:var(--color1);
      font-family:var(--font1);
    }
    #title 
    {
      width:100vw;
      position:absolute;
      top:calc(10vh + 70px);
      text-align:center;
    }
    #list
    {
      position:absolute;
      top:calc(10vh + 150px);
      width:100vw;
      height:70vh;
    }
    .article 
    {
      width:90vw;
      height:30px;
      margin-top:30px;
      margin-left:2.5vw;
      text-align:center;
      background-color:var(--color2);
      color:var(--color1);
      border-left:10px solid var(--color4);
      cursor:pointer;
    }
    a 
    {
      display:inline-block;
      padding:20px;
      height:20px;
      color:var(--color1);
      text-decoration:none;
      font-size:20px;
    }
    @media screen and (max-width:600px)
    {

    }
    @media screen and (min-width:600px)
    {
      .article 
      {
        width:20vw;
        margin-top:30px;
        margin-left:calc(40vw - 25px);
        padding-top:20px;
        padding-bottom:20px;
        text-align:center;
        background-color:var(--color2);
        color:var(--color1);
        border-left:50px solid var(--color4);
      }
    }
</style>
