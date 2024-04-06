<script setup>
import {ref, reactive} from "vue";

const state = reactive({
  knowledge: [],
  chatbot: [],
  user: [],
  chatbotLog: [],
  userLog: []
});

import axios from "axios";

async function getKnowledge()
{
  const response = await axios.get(
    `http://localhost:3000/getKnowledge`,
    {
      headers: 
      {
        'Content-Type': 'application/json',
      },
    },
  )

  state.knowledge = response.data;
  state.chatbot = response.data.filter((k) => k.data.type === "Chatbot");
  state.user = response.data.filter((k) => k.data.type === "User");
}

getKnowledge();

async function generateResponse()
{
  state.userLog.push("Hi");
  console.log(state.userLog);
}
</script>

<template>
  <div id="container">
    <h1 id="title">
      DaskTechAI
    </h1>
    <div id="chatbot">
      <div class="chatbot-message" v-for="(k, i) in state.chatbotLog">
        {{ k }}
      </div>
      <div class="user-message" v-for="(k, i) in state.userLog">
        {{ k }}
      </div>
      <input type="text"/>
      <button @click="generateResponse">
        Send
      </button>
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
    top:calc(15vh + 150px);
    width:100vw;
    height:70vh;
  }
  #article 
  {
    box-shadow:10px 10px 10px rgb(200, 200, 200);
  }
  @media screen and (max-width:600px)
  {
    #article
    {
      width:90vw;
      height:20vh;
      margin-top:30px;
      margin-left:3vw;
      background-color: var(--color5);
      border-left:10px solid var(--color4);
    }
    #chatbot 
    {
      position:absolute;
      top:calc(15vh + 150px);
      left:5vw;
      width:90vw;
      height:50vh;
      border:3px solid var(--color4);
      overflow-y:scroll;
    }
  }
  .user-message 
  {
    margin-top:30px;
    float:right;
    width:40%;
    padding:20px;
    background-color:var(--color2);
    color:white;
    border-radius:50px;
  }
  .chatbot-message 
  {
    margin-top:100px;
    float:left;
    width:40%;
    padding:20px;
    background-color:var(--color2);
    color:white;
    border-radius:50px;
  }
  #chatbot input 
  {
    position:absolute;
    bottom:0px;
    left:0px;
    width:80%;
    height:35px;
    padding:5px;
    background-color:var(--color5);
    border:none;
    font-size:16px;
  }
  #chatbot button
  {
    position:absolute;
    bottom:0px;
    right:0px;
    width:18%;
    height:45px;
    background-color:var(--color3);
    color:white;
    border:none;
    font-size:16px;
  }
  @media screen and (min-width:600px)
  {
    #list 
    {
      top:calc(15vh + 100px);
    }
    #article
    {
      display:inline-block;
      width:20vw;
      height:20vh;
      margin-top:30px;
      margin-left:3vw;
      background-color: var(--color5);
      border-left:20px solid var(--color4);
    }
    #chatbot 
    {
      position:absolute;
      top:calc(15vh + 150px);
      left:35vw;
      width:30vw;
      height:50vh;
      border:3px solid var(--color4);
      overflow-y:scroll;
    }
  }
</style>
