import { mapGetters,mapActions } from "vuex"

 export default renderChart=()=>{(
    
    series= [{
           
        data:[...this.$store.getters.allValues],
  }],
      chartOptions= {
        chart: {
          type: 'bar',
          height: 380,
        },
        xaxis: {
          type: 'date',
          labels:{},
          //categories:[...this.newNames],
         categories:[...this.$store.getters.allNames]
        
        },
       
       
        title: {
            text: 'Energy (kW)',
            color:'#7f7370'
        },
        
      })
}