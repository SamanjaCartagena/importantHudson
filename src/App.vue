<template>
  <nav-bar></nav-bar>

<div>
  <side-bar />
  <div :style="{ 'margin-left': sidebarWidth }">

    <router-view />
  </div>
</div>
</template>

<script>
//import axios from 'axios'
import { useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import {sidebarWidth} from './components/state'
export default {
  setup(){
        const route = useRoute()
    return {
      sidebarWidth
    }
  },
  name: 'App',
  
 components:{
  SideBar,
   NavBar
 },
 data(){
   return{
    crumbs:['Home','Category','Sub Category']
   }
 },
 methods:{
    selected(crumb){
      console.log(crumb)
    }
 }
}
</script>

<style>
* {
  font-family: "Poppins", sans-serif;
  
  
}
body{
    background-color: #f3f3f4;
    -webkit-transform: translate(0px, 0);
   -webkit-transition: -webkit-transform 0.3s ease;
   -moz-transform: translate(0px, 0);
   -moz-transition: -moz-transform 0.3s ease;
   transform: translate(0px, 0);
   transition: -webkit-transform 0.3s ease;
}
#nav {
  padding: 30px;
  
}
#nav a {
  font-weight: bold;
  color: white;
}
#nav a.router-link-exact-active {
  color: grey;
}
header{
  width:100vw;
  background-color: black;
  color: white;
  top:0;
  height:50px;
  margin-top: 0;
  position: fixed;
  z-index: 2;
}
</style>