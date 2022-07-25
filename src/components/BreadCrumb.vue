<template>
  <div>
    <span  style="font-size:30px; margin:20px;">
      &nbsp;&nbsp;&nbsp;&nbsp;{{this.routeName.split('?')[0]}}
    </span>
    <nav>
      <ol class="breadcrumb">
          <li v-for="(crumb,ci) in crumbs" :key="ci" class="breadcrumb-item align-items-center">
            <button class="btn btn-link"  
            @click="selected(crumb)">
              {{crumb}}
            </button>
            </li>
        </ol>

    </nav>
  </div>
</template>

<script>
export default {
  props:{
    crumbs:{
      type:Array,
      required:true
    }
  },
   data(){
    return {
      name:'',
      routeName:''
    }
   },
   methods:{
      isLast(index){
        return index === this.crumbs.length -1;
      },
      selected(crumb){
        this.$emit('selected',crumb);
      }
   },
    
  created(){
   this.name=this.$router.currentRoute.value.fullPath;
   this.routeName= this.name.split('_').join(' ').toUpperCase().slice(1);
  }

}
</script>

<style scoped>
  .breadcrumb{
    background-color:white;
    border:1px solid rgba(0,0,0,0.125);
    border-radius:0.37rem;
  }
</style>