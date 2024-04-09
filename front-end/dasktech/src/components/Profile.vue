<script setup>

</script>

<template>
  <div id="container">
    <div id="image-container">

    </div>
    <div id="about-container">

    </div>
    <div id="content-container">

    </div>
  </div>
</template>

<style scoped>
    #container 
    {
        width:100vw;
        height:90vh;
        background-color:var(--color1);
        font-family:var(--font1);
    }
    @media screen and (max-width:600px)
    {
        #image-container 
        {
            position:absolute;
            top:20vh;
            left:20vw;
            width:60vw;
            height:20vh;
            background-color:var(--color5);
        }
        #about-container 
        {
            position:absolute;
            top:45vh;
            left:5vw;
            width:90vw;
            height:20vh;
            background-color:var(--color5);
        }
        #content-container 
        {
            position:absolute;
            top:70vh;
            left:5vw;
            width:90vw;
            height:20vh;
            background-color:var(--color5);
        }
    }
    @media screen and (min-width:600px)
    {
        #image-container 
        {
            position:absolute;
            top:20vh;
            left:5vw;
            width:20vw;
            height:30vh;
            background-color:var(--color5);
        }
        #about-container 
        {
            position:absolute;
            top:55vh;
            left:5vw;
            width:20vw;
            height:40vh;
            background-color:var(--color5);
        }
        #content-container 
        {
            position:absolute;
            top:20vh;
            right:5vw;
            width:65vw;
            height:75vh;
            background-color:var(--color5);
        }
    }
</style>
