import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
const router=createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        redirect:'/main_meters',
        name:'main_meters',
        component: HomePage,
      
    },
    
    {
        path:'/:pageName',
        name:'pageName',
        component:HomePage,
     children:[
        {
         path:'/pageName/:daterange',
         name:'daterange',
         component:HomePage,
         
        }
     ] 
    
    },

      
    /**  {
        path:'/catchAll(.*)',
          name:'NotFound',
        component:NotFound
    }
    **/


    
  
]

});

export default router;