<template>

  <div class="h-6" />
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#212529"
    text-color="#fff"
    active-text-color="#fff"
    active-text-decoration="none"
    @select="handleSelect"
    
  >
    <el-menu-item index="logo" >Tec Systems</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Power Meters</template>
      <router-link :to="`/pm1`"><el-menu-item index="pm1">PM 01</el-menu-item></router-link>

           <el-menu-item index="pm2">PM 02</el-menu-item>
      <el-menu-item index="pm3">PM 03</el-menu-item>
      <el-menu-item index="pm4">PM 04</el-menu-item>

   </el-sub-menu>
   </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from '../router';
import store from '../store';
const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log("The selected key is "+key)
      store.state.currentRoute=key
    router.push({path:``+key})
    console.log(store.state.currentRoute)
}

</script>
<script>
</script>
