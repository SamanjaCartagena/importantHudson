import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd());
  
  return{
    plugins: [vue()],
    build:{
       outDir:"./wwwroot/app/", sourcemap:true
    },
  server: {
    
    proxy: {
      "^/api": {
        target:`http://172.19.85.60:3080`,
        
        changeOrigin: true,
        secure: false,
        withCredentials: true,
        rewrite: (path) => path.replace(/^\/api/, ``),
      },
      
      
       
      
     
    },
     port:3080
  },
}
})
