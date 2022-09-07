<template>
  <div style="display: inline-block">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>
        <a href="#" @click="home">homepage</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item
        ><a href="/pmdashboard/main" @click="mainPage"
          >main</a
        ></el-breadcrumb-item
      >
      <el-breadcrumb-item v-if="(this.a=='PM1')||(this.a=='PM2')||(this.a=='PM3')||(this.a=='PM4')">
        {{ page }}</el-breadcrumb-item
      >
      <el-breadcrumb-item
        v-else
        v-for="s in stack"
        :key="s"
        @click="paged(s)"
      >
        {{ s }}</el-breadcrumb-item
      >
 
    </el-breadcrumb>
  </div>
</template>
<script>
import App from "../App.vue";
export default {
  props: ["page"],
  data() {
    return {
      beforeRoute: "",
      afterRoute: "",
      stack: [],
      a:"",
    };
  },

  components: { App },
  methods: {
    mainPage() {
      this.$store.dispatch("changeRoute", "main");
      this.$router.push({ path: "/pmdashboard/main" });
      this.$store.dispatch("fetchGaugeData");
    },
    paged(val) {
      console.log("this value was clicked " + val);
      console.log(this.stack.length);

      for (let i = this.stack.length - 1; i > 0; i--) {
        if (val == this.stack[i]) {
          continue;
        } else {
          this.stack.pop();
        }
      }
      console.log("The stack that is left is " + this.stack);
      this.$store.dispatch("changeRoute", `${val}`);

      this.$store.dispatch("fetchGaugeData");
      this.$router.push({
        path: `${val}`,
        query: {
          startDate: `${this.$store.getters.start}`,
          endDate: `${this.$store.getters.end}`,
        },
      });
      this.stack.pop();
    },
  },
  created() {
    this.$router.afterEach((to, from) => {
      console.log(to);
      console.log("The address before route is  " + from.params.pageName);
      this.beforeRoute = from.params.pageName;

      console.log("The address after route is " + to.params.pageName);
      this.afterRoute = to.params.pageName;
      this.a = this.afterRoute.toUpperCase()
      if (this.beforeRoute != this.afterRoute) {
        this.stack.push(this.a);
      } 
      else if(this.afterRoute=='bm1' || this.afterRoute =='bm2'){
        this.stack=[]
        this.stack.push('PM1')
        this.stack.push(this.a)
      }
      else if(this.afterRoute=='main'){
        this.stack=[]
      }
    });
  },
};
</script>