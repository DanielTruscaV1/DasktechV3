<script setup>

</script>

<template>
  <div id="container">
    <h1 id="title">
      Artificial Intelligence
    </h1>
    <div id="list">
      <div class="article">
        What is Artificial Intelligence?
      </div>
      <div class="article">
        Types of AI
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
      width:100vw;
      margin-top:30px;
      padding-top:20px;
      padding-bottom:20px;
      text-align:center;
      background-color:var(--color2);
      color:var(--color1);
      border-left:10px solid var(--color4);
    }
    @media screen and (max-width:600px)
    {

    }
    @media screen and (min-width:600px)
    {
      .article 
      {
        width:50vw;
        margin-top:30px;
        margin-left:calc(25vw - 50px);
        padding-top:20px;
        padding-bottom:20px;
        text-align:center;
        background-color:var(--color2);
        color:var(--color1);
        border-left:50px solid var(--color4);
      }
    }
</style>
