<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item ><a href="#" @click="home">homepage</a></el-breadcrumb-item>
    <el-breadcrumb-item     
      ><a href="/pmdashboard/main" @click="mainPage">main</a></el-breadcrumb-item
    >
    <div v-if="this.beforeRoute != this.afterRoute">
    <el-breadcrumb-item 
    :to="{ path: `/pmdashboard/${item}` }"
    @click="clicked(item)"
    separator="/" v-for="item in newRoutes" :key="item"
      ><a href="#">{{item}}</a></el-breadcrumb-item>
    
  </div>
 <el-breadcrumb-item v-else
      ><a href="#" @click="paged">{{page}}</a></el-breadcrumb-item>
    </el-breadcrumb>

</template>
<script>
  import moment from 'moment'
export default{
    props:['page'],
    data(){
        return {
         beforeRoute:'',
         afterRoute:'',
         newRoutes:[],
         routeractive:false
        }
    },

    components:{

    },
    methods:{
        mainPage(){
               this.$store.dispatch('changeStartDate',moment().format('YYYY-MM-DD'))
            this.$store.dispatch('changeEndDate',moment().format('YYYY-MM-DD'))
          this.$store.dispatch('changeRoute','main')
                   this.$router.push({path:'/pmdashboard/main'})
      this.$store.dispatch('fetchBarData')
      this.$store.dispatch('fetchGaugeData')
      this.$store.dispatch('fetchLineData')
        },
        clicked(item){
         console.log(item+" item was clicked")
         this.$store.dispatch('changeStartDate',moment().format('YYYY-MM-DD'))
            this.$store.dispatch('changeEndDate',moment().format('YYYY-MM-DD'))
          this.$store.dispatch('changeRoute',`${item}`)
                  console.log("the current route is "+this.$store.getters.currentRoutes)
                   this.$router.push({path:`/pmdashboard/${item}`})
       
      this.$store.dispatch('fetchBarData')
      this.$store.dispatch('fetchGaugeData')
      
      
 
      this.$store.dispatch('fetchLineData')
        },
        paged(){
               this.$store.dispatch('changeStartDate',moment().format('YYYY-MM-DD'))
            this.$store.dispatch('changeEndDate',moment().format('YYYY-MM-DD'))
          this.$store.dispatch('changeRoute',`${page}`)
                  
                   this.$router.push({path:`/pmdashboard/${page}`})
      
       
      this.$store.dispatch('fetchBarData')
      this.$store.dispatch('fetchGaugeData')
      
      
 
      this.$store.dispatch('fetchLineData')
        }

    },
    created(){
        this.$router.afterEach((to, from) => {
            console.log(to)
            console.log("The address before route is  "+from.params.pageName)
            this.beforeRoute=from.params.pageName
            console.log("The address after route is "+to.params.pageName)
            this.afterRoute=to.params.pageName
            this.newRoutes.push(this.afterRoute)
            if(this.afterRoute=='main'){
                this.newRoutes=[]
            }
            if(this.beforeRoute == this.afterRoute){
                this.newRoutes=[]
            }
})


    }
}

</script>