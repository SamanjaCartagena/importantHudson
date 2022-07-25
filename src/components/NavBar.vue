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
    <el-menu-item index="1" >Tec Systems</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Power Meters</template>
      <el-menu-item index="2-1">Main Meters</el-menu-item>
      <el-sub-menu index="2-2">
        <template #title>PM1</template>
        <el-menu-item index="2-4-1">Submenu PM 1</el-menu-item>
        <el-menu-item index="2-4-2">Submenu PM 1</el-menu-item>
        <el-menu-item index="2-4-3">Submenu PM 1</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-3">
        <template #title>PM 2</template>
        <el-menu-item index="2-4-1">Submenu PM 2</el-menu-item>
        <el-menu-item index="2-4-2">Submenu PM 2</el-menu-item>
        <el-menu-item index="2-4-3">Submenu PM 2</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-4">
        <template #title>PM 3</template>
        <el-menu-item index="2-4-1">PM 1</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2-5">
        <template #title>PM 4</template>
        <el-menu-item index="2-4-1">PM 1</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
