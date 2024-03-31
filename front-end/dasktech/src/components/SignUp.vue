<script setup>

</script>

<template>
  <div id="container">
    <h1 id="title">
      Sign-Up
    </h1>
    <div id="form">
        <p>
            First Name
        </p>
        <input type="text"/>
        <p>
            Last Name
        </p>
        <input type="text"/>
        <p>
            Email
        </p>
        <input type="text"/>
        <p>
            Password
        </p>
        <input type="password"/>
        <button>
            Confirm
        </button>
    </div>
  </div>
</template>

<style scoped>
    #container 
    {
        width:100vw;
        height:80vh;   
        font-family:var(--font1);
    }
    #form 
    {
        position:absolute;
        background-color:var(--color5);
    }
    #title 
    {
      width:100vw;
      position:absolute;
      top:calc(10vh + 70px);
      text-align:center;
    }
    p 
    {
        margin-top:0px;
        padding-top:30px;
        padding-left:40px;
    }
    input 
    {
        height:22px;
        padding:2px;
        margin-top:0px;
        margin-left:40px;
        width:70%;
        border:2px solid var(--color4);
    }
    button 
    {
        display:block;
        width:140px;
        height:30px;
        margin-top:30px;
        margin-left:calc(50% - 70px);
        background-color:var(--color4);
        color:var(--color1);
        border:none;
        font-size:16px;
    }
    @media screen and (max-width:600px)
    {
        #title 
        {
            top:calc(15vw + 50px);
        }
        #form 
        {
            width:90vw;
            height:60vh;
            top:25vh;
            left:5vw;
            border-bottom:10px solid var(--color4);
        }
    }
    @media screen and (min-width:600px)
    {
        #form 
        {
            width:30vw;
            height:50vh;
            top:30vh;
            left:35vw;
            border-bottom:20px solid var(--color4);
        }
    }
</style>
