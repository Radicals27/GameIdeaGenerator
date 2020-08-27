<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/background.png">
    <GameIdea idea="Click the button for a new idea!"/>
    <GameTwist twist=""/>
  </div>
</template>

<script>
import GameIdea from './components/Idea.vue'
import GameTwist from './components/Twist.vue'

export default {
  name: 'App',
  components: {
    GameIdea, GameTwist
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
body {
    background-color: rgb(78, 81, 230);
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}

#app {
    height: 10em;
    position: relative;
    font-family: Karla;
}

#app button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
    margin-top: 1%;
    margin-bottom: 2%;

    background-color: #a3b0fa; 
    border: 2px solid #000000;
    color: rgb(0, 0, 0);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 2vw;
}

#app button:hover {
    background-color: rgb(220, 230, 245);
}

#app h3 {
    font-size: 4em;

    margin: 0;
    text-align: center;
}

#app h4 {
    padding-top: 2%;
    font-size: 2.2em;
    margin: 0;
    text-align: center;
}
</style>
