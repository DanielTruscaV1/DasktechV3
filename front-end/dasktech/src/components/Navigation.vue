<script setup>

</script>

<template>
  <div id="container">
    <div id="buttons">
        <router-link :to="{name: 'Home'}">
            Home
        </router-link>
        <router-link :to="{name: 'Subject'}">
            Software
        </router-link>
        <router-link :to="{name: 'Subject'}">
            Hardware
        </router-link>
        <router-link :to="{name: 'Subject'}">
            AI
        </router-link>
        <router-link :to="{name: 'SignUp'}">
            Sign-Up
        </router-link>
        <router-link :to="{name: 'SignIn'}">
            Sign-In
        </router-link>
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
    a
    {
        display:inline-block;
        width:100%;
        height:7%;
        margin-top:30px;
        font-size:14px;
        font-family:var(--font1);
        background-color:transparent;
        color:var(--color1);
        border:none;
        text-decoration:none;
        text-align:center;
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
        a 
        {
            font-size:18px;
        }
    }
</style>
