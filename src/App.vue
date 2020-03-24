<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  created () {
    this.getHomeData();
    this.getHomeData1();
  },
  methods:{
    getHomeData(){
      axios.get("/api/index").then(res =>{
        console.log(res.data)
      })
    },
    getHomeData1(){
      axios.get("/cart/getCartList").then(res =>{
        console.log(res.data)
      })
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
