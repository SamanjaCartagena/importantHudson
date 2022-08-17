<template>
<div class="sidebar" :style="{width: sidebarWidth}">
    
    <div v-if="collapsed">
        <br/>
        <br/>
        <sidebar-link to="/" icon="fas fa-home">Home</sidebar-link>
    <sidebar-link to="/dashboard" icon="fas fa-columns">Dashboard</sidebar-link>
    <sidebar-link to="/analytics" icon="fas fa-chart-bar">Analytics</sidebar-link>
    <sidebar-link to="/friends" icon="fas fa-users"></sidebar-link>
    <sidebar-link to="/images" icon="fas fa-image"></sidebar-link>

    </div>
    <div v-else >
    <br/>
    <br/>
    <sidebar-link to="/" icon="fas fa-home" ></sidebar-link>
    <sidebar-link to="/dashboard" icon="fas fa-columns"></sidebar-link>
    <sidebar-link to="/analytics" icon="fas fa-chart-bar"></sidebar-link>
    <sidebar-link to="/friends" icon="fas fa-users"></sidebar-link>
    <sidebar-link to="/images" icon="fas fa-image"></sidebar-link>
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
import {collapsed, toggleSidebar, sidebarWidth} from './state'
export default {
    props:{},
    components:{SidebarLink},
    setup(){
       return {collapsed, toggleSidebar, sidebarWidth}
    }

}
</script>

<style>
:root {
  --sidebar-bg-color: #212529;
  --sidebar-item-hover: grey;
  --sidebar-item-active: #212529;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  
  bottom: 0;
  padding: 2em;
  transition: 0.3s ease;
  display: flex;
  
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  top: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>