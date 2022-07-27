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
      <el-menu-item index="main">Main Meters</el-menu-item>
     
      <el-sub-menu index="2-3">
        <template #title>PM 1</template>
        <el-sub-menu index="2-4">
        <template #title>BM1</template>
               <el-menu-item index="2-4-1">LM 19</el-menu-item>

        <el-menu-item index="2-4-1">LM 20</el-menu-item>
        <el-menu-item index="2-4-2">LM 21</el-menu-item>
        <el-menu-item index="2-4-3">LM 22</el-menu-item>
      </el-sub-menu>
       <el-sub-menu index="2-5">
        <template #title>BM 2</template>
               <el-menu-item index="2-4-1">LM 13</el-menu-item>

        <el-menu-item index="2-4-1">LM 14</el-menu-item>
        
      </el-sub-menu>
      </el-sub-menu>
    <el-sub-menu index="2-6">
        <template #title>PM 2</template>
        <el-sub-menu index="2-7">
        <template #title>BM 3</template>
               <el-menu-item index="2-4-1">LM 07</el-menu-item>

        <el-menu-item index="2-4-1">LM 08</el-menu-item>
     
      </el-sub-menu>
       <el-sub-menu index="2-8">
        <template #title>BM 8</template>
               <el-menu-item index="2-4-1">LM 13</el-menu-item>

        <el-menu-item index="2-4-1">LM 14</el-menu-item>
        
      </el-sub-menu>
      </el-sub-menu>
        <el-sub-menu index="2-9">
        <template #title>PM 3</template>
           <el-menu-item index="2-4-1">BM 4</el-menu-item>

        <el-menu-item index="2-4-1">BM 5</el-menu-item>
      
      </el-sub-menu>
          <el-sub-menu index="2-10">
        <template #title>PM 4</template>
         <el-menu-item index="2-4-1">CM 2</el-menu-item>

        <el-menu-item index="2-4-1">CM 3</el-menu-item>
        <el-menu-item index="2-4-2">CM 6</el-menu-item>
        <el-menu-item index="2-4-3">CM 8</el-menu-item>
              <el-menu-item index="2-4-3">CM 9</el-menu-item>
        <el-menu-item index="2-4-3">CM 10</el-menu-item>
      
      </el-sub-menu>
    </el-sub-menu>
    
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log("The selected key is "+key, keyPath)
}

</script>
