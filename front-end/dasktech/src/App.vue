<script setup>
  import Header from "./components/Header.vue";
  import Footer from "./components/Footer.vue";
</script>

<template>
  <Header/>
  <RouterView/>
  <Footer/>
  <button>
    <i class="material-icons">menu</i>
  </button>
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
  }
</style>
