<template>
<div class="sidebar" :style="{width: sidebarWidth,color:white}" @mouseenter="toggleEnter" @mouseleave="toggleSidebar" >
    
    <div v-if="!collapsed" >
        <br/>
        <br/>
           <a href="/pmdashboard/main"><i class="material-icons">speed</i><span class="icon-text">Power Meters</span></a>

    <a href="#"><i class="material-icons">settings</i><span class="icon-text">Settings</span></a>

       <a href="#"><i class="material-icons">help_outline</i><span class="icon-text">Help</span></a>


    </div>
    <div v-else >
    <br/>
    <br/>
           <a href="/pmdashboard/main" @click="selectedSidebar"><i class="material-icons">speed</i><span class="icon-text">Power Meters</span></a>

    <a href=""><i class="material-icons">settings</i><span class="icon-text">Settings</span></a>

       <a href="#"><i class="material-icons">help_outline</i><span class="icon-text">Help</span></a>

</div>
<span
 class="collapse-icon"
 :class="{'rotate-180':collapsed}"
@click="toggleSidebar"
>
<i class="fas fa-angle-double-left"/>

</span>

</div>
  
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import {collapsed, toggleSidebar, sidebarWidth, toggleEnter} from './state'
import moment from 'moment'
export default {
    props:{},
    components:{SidebarLink},
    setup(){
       return {collapsed, toggleSidebar, sidebarWidth, toggleEnter}
    },
    methods:{
      selectedSidebar(){
           this.$store.dispatch('changeRoute','main')
                       setInterval(()=>{this.$store.dispatch('changeRoute','main')},1000)

      this.$store.dispatch('changeStartDate',moment().format('YYYY-MM-DD'))
            this.$store.dispatch('changeEndDate',moment().format('YYYY-MM-DD'))
      this.$store.dispatch('fetchGaugeData')
      
                           this.$store.dispatch('fetchBarData')

 
      this.$store.dispatch('fetchLineData')
      },
   
    
    }

}
</script>

<style scoped>


body {
  font-family: "Roboto", sans-serif;
  background-color: #f3f3f4;
  padding: 0px 0px 0px 0px;
}


.sidebar {
  height: 100%;
  width: 55px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111111;
  overflow-x: hidden;
  padding-top: 40px;
  white-space: nowrap;
  margin-top: 55px;
   -webkit-transform: translate(0px, 0);
   -webkit-transition: -webkit-transform 0.3s ease;
   -moz-transform: translate(0px, 0);
   -moz-transition: -moz-transform 0.3s ease;
   transform: translate(0px, 0);
   transition: -webkit-transform 0.3s ease;
}

/* Style the sidenav links and the dropdown button */

.sidebar{
  color:white
}
.sidebar a,
.dropdown-btn {
  padding: 6px 8px 6px 20px;
  text-decoration: none;
  font-size: 14px;
  color: #c0bfbf;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}

/* On mouse-over */
.sidebar a:hover,
.dropdown-btn:hover {
  color: #f1f1f1;
  background-color: #212529;
  border-left: 2px solid red;
  padding: 6px 8px 6px 18px;
}
.sidebar :hover{

}

/* Add an active class to the active dropdown button
.active {
  background-color: red;
  color: white;
} */

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
  display: none;
  background-color: rgb(22, 22, 22);
  padding-left: 55px;
}

/* Optional: Style the caret down icon
.fa-caret-down {
  float: right;
  padding-right: 1px;
} */

/* SIDEBAR ---------------------> */

/* ICONS <--------------------- */
.material-icons,
.icon-text {
  vertical-align: middle;
  font-size: 16px;
}

.material-icons {
  padding-bottom: 3px;
  margin-right: 20px;
}
/* ICONS ---------------------> */

/* Main content */

#main {
  /*  position: absolute; */
  /*  top: 30px; */
  /*  right: 25px; */

  padding: 56px 0px 10px 10px;
  /* font-size: 20px; */
  margin-left: 45px;
  transition: margin-left 0.3s;
}

/* Some media queries for responsiveness */
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}

/* Botton Print to PDF */
.button-pdf {
  background-color: #333;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 2px 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;
  margin: 4px 2px;
  cursor: pointer;
}
.button-pdf:hover {
  background-color: #777;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>