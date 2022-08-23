import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/HomePage.vue';
import HudsonPage from '../components/HudsonPage.vue';
import store from '../store'
const router=createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        
        component:HomePage, 
    },
    {
        path:'/hudsonPage',
        name:'hudson',
        component:HudsonPage

    },
    
    {
        path:'/pmdashboard/:pageName',
        name:'pageName',
        component:HomePage,
        
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