<template>
<div>
  <h1>The sidebar is {{collapsed? 'open':'closed'}}</h1>
   <button @click="toggleSidebar">Toggle Sidebar</button>
</div>
</template>

<script>
import {collapsed, toggleSidebar} from './state'
export default {
   setup(){
    return {collapsed, toggleSidebar}
   }
}
</script>

<style>

</style>