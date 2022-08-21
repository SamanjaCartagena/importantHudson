<template>
  <router-link :to="to" class="link" :class="{active:isActive}">
   <i class="icon" :class="icon"/>
   <Transition name="slide-fade">
   <span if="!collapsed">
   <slot />
   </span>
   </Transition>
  </router-link>
</template>

<script>
import {computed} from 'vue'
import {useRoute} from 'vue-router'
import {collapsed} from './state'

export default {
   props:{
    to:{type: String, required:true},
    icon:{type:String, required:true}
   },
   setup(props){
    const route= useRoute()
    const isActive= computed(()=>route.path===props.to)
    return {isActive, collapsed}
   }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.link{
    display: flex;
    align-items: center;
    cursor:pointer;
    position:relative;
    font-weight:400;
    user-select: none;

    margin: 0.1em 0;
    padding: 0.4em;
    border-radius: 0.25em;
    height:1.5em;
    z-index:3;
    color:white;
    text-decoration: none;
}
.link:hover{
    background-color: var(--sidebar-item-hover);
}
.link.active{
    background-color: var(--sidebar-item-active);
}
.link .icon{
    flex-shrink: 0;
    width:25px;
    margin-right: 10px;
}
</style>