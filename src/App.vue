<template>

<div>
  <nav-bar></nav-bar>
  <side-bar />
  <div :style="{ 'margin-left': sidebarWidth }">

    <router-view />
  </div>
</div>
</template>

<script>
//import axios from 'axios'
import BreadCrumb from './components/BreadCrumb.vue'
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
  BreadCrumb, NavBar
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