<script setup>
    import { useRouter, useRoute } from 'vue-router';

    const router = useRouter();
    const route = useRoute();

    function go_to(path)
    {
        router.push({ name: "Subject1"})
        
    }
</script>

<template>
  <div id="container">
    <div id="buttons">
        <button @click="go_to('Subject')">
            Artificial Intelligence
        </button>
    </div>
    
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
    #buttons
    {
        margin-top:10vh;
        height:80vh;
    }
    button 
    {
        width:100%;
        height:7%;
        font-size:16px;
        background-color:transparent;
        color:var(--color1);
        border:none;
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
            width:160px;
            height:80vh;
            background-color:var(--color3);
        }
    }
</style>
