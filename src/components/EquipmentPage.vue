<template>
<div>
        <el-card class="box-card" style="width:100%">
                   <div v-if="this.$store.getters.currentRoutes =='pm1'">
                   <ul>
                    <li>{{a}}</li>
                    <li>{{b}}</li>
                    <li>{{c}}</li>
                    <li>{{d}}</li>

                   </ul>
        
         </div>

         </el-card>
        
</div>
</template>
<script>
import equipment from '../../equipments.json'
export default {
    data(){
    return{
      equipment:equipment,
      eq:[],a:'',b:'',c:'',d:''
    }
    },
    components:{

    }, 
    created(){
        console.log("The equipements are "+equipment,length)
        var e = Object.entries(equipment)
        console.log(e)

        e.forEach(element => this.eq.push(element[1]))
        this.a = this.eq[0].status
        this.b = this.eq[0].value
        this.c= this.eq[0].value1
         this.d= this.eq[0].value2
        console.log(this.eq[0].status)
    }
}

</script>