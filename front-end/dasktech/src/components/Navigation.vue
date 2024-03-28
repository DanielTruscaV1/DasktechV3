<script setup>

</script>

<template>
  <div id="container">

  </div>
</template>

<style scoped>
    #container 
    {
        position:absolute;
        top:10vh;
        right:0px;
        width:70px;
        height:80vh;
        background-color:var(--color3);
    }
    @media screen and (max-width:600px)
    {

    }
    @media screen and (min-width:600px)
    {
        #container 
        {
            position:absolute;
            top:10vh;
            right:0px;
            width:80px;
            height:80vh;
            background-color:var(--color3);
        }
    }
</style>
