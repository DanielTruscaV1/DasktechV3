<script setup>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
  import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Header/>
  <RouterView/>
  <Footer/>
  <button id="button1">
    <i 
      class="material-icons" 
      style="font-size:30px"
    >
    menu
    </i>
  </button>
  <button id="button2">
    <i 
      class="material-icons" 
      style="font-size:30px"
    >
    arrow_back
    </i>
  </button>
  <button id="button3">
    <i 
      class="material-icons" 
      style="font-size:30px"
    >
    help
    </i>
  </button>
  <Navigation/>
</template>

<style scoped>
  button 
  {
    width:50px;
    height:50px;
    border-radius:50%;
    background-color:var(--color2);
    color:var(--color1);
    border:none;
    position:absolute;
    z-index:2;
  }
  #button1 
  {
    right:10px;
    top:calc(10vh + 10px);
  }
  #button2
  {
    left:10px;
    top:calc(10vh + 10px);
  }
  #button3
  {
    right:10px;
    bottom:calc(10vh + 10px);
  }
  @media screen and (max-width:600px)
  {
    
  }
  @media screen and (min-width:600px)
  {
      button 
      {
        width:60px;
        height:60px;
      }
  }
</style>
