<script setup>

</script>

<template>
  <div id="container">
    <h1 id="title">
      Explore the world of technology!
    </h1>
    <div id="list">
      <div id="article">

      </div>
      <div id="article">

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
  }
</style>
