<template>
<div >
 <!-- Nav bar -->
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><span style="color:red; font-size: 18px;">TEC</span><span
          style="color:white; font-size: 18px;">Connector</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <!-- Open / Close -->
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" @click="toggleSidebar"><i id="menuIcon"
                class="material-icons">menu</i><span class="icon-text"></span></a>
          </li>
          <!-- Full Screen -->
          <li class="nav-item">
            <a id="btnFullscreen" class="nav-link active" aria-current="page" href="#" @click="showFullScreen"><i id="menuIcon"
                class="material-icons">fullscreen</i><span class="icon-text"></span></a>
          </li>

          <!-- <li class="nav-item active"> <a class="nav-link" href="/">Home </a> </li> -->
          <!-- <li class="nav-item"><a class="nav-link" href="#"> About </a></li> -->
          <li class="nav-item">
          <div class="dropdown">
    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
      Dropdown button
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Link 1</a></li>
      <li><a class="dropdown-item" href="#">Link 2</a></li>
      <li><a class="dropdown-item" href="#">Link 3</a></li>
    </ul>
  </div>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Disabled Search" aria-label="Search"
            disabled>
          <button class="btn btn-dark btn-sm" type="submit">Search</button>
        </form>
      </div>
    </div>
    </nav>
</div>
</template>
<script>
import {collapsed, toggleSidebar, sidebarWidth} from './state'

export default{
  data(){
    return{
      selectedValue:'',
      value:'',
      value1:'',
      button1:'main'
    }
  },
     setup(){
       return {collapsed, toggleSidebar, sidebarWidth}
    },
    created(){

        // NAVBAR TREE VIEW DROPDOWN MENU -------------
   
    },
  methods:{
    
    selected(){
      this.value = this.selectedValue.toLowerCase()
      
            this.$store.dispatch('changeRoute',this.value)
            setInterval(()=>{this.$store.dispatch('changeRoute',this.value)},1000)
      this.$router.push({path:`/pmdashboard/${this.value}`})
     
      this.$store.dispatch('fetchBarData')
      this.$store.dispatch('changeStartDate',this.$store.getters.start)
            this.$store.dispatch('changeEndDate',this.$store.getters.end)
      this.$store.dispatch('fetchGaugeData')
      
      
 
      this.$store.dispatch('fetchLineData')
      
      
      
    },
   selectedbtn1(){
   
      this.$router.push({path:`/pmdashboard/${main}`})
      this.$store.dispatch('changeRoute','main')
      this.$store.dispatch('fetchGaugeData')
      this.$store.dispatch('fetchLineData')
      this.$store.dispatch('fetchBarData')
   }
  }, mounted(){
         this.$store.dispatch('fetchBarData')
       
      this.$store.dispatch('fetchGaugeData')
      
      
 
      this.$store.dispatch('fetchLineData')
  }
}
</script>
<style scoped>
 /* ============ desktop view ============ */
    @media all and (min-width: 992px) {
     
      .nav-item .submenu {
        display: none;
        position: absolute;
        left: 100%;
        top: -7px;
      }

      .nav-item .submenu-left {
        right: 100%;
        left: auto;
      }

    }

    /* ============ desktop view .end// ============ */

    /* ============ small devices ============ */
   
    @font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(/icons.woff2) format('woff2');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -moz-font-feature-settings: 'liga';
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: "Roboto", sans-serif;
  background-color: #f3f3f4;
  padding: 0px 0px 0px 0px;
}

/* SIDEBAR <--------------------- */

/* Fixed sidenav, full height */
/* #212529 - NAV DARK */
.sidebar {
  height: 100%;
  width: 55px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  transition: 0.3s;
  overflow-x: hidden;
  padding-top: 40px;
  white-space: nowrap;
  margin-top: 55px;
}

/* Style the sidenav links and the dropdown button */
.sidebar a,
.dropdown-btn {
  padding: 6px 8px 6px 20px;
  text-decoration: none;
  font-size: 14px;
  color: #c0bfbf;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
  z-index: 3;
}

/* On mouse-over */
.sidebar a:hover,
.dropdown-btn:hover {
  color: #f1f1f1;
  background-color: #212529;
  border-left: 2px solid red;
  padding: 6px 8px 6px 18px;
}

/* Add an active class to the active dropdown button
.active {
  background-color: red;
  color: white;
} */

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */


/* Optional: Style the caret down icon
.fa-caret-down {
  float: right;
  padding-right: 1px;
} */

/* SIDEBAR ---------------------> */

/* ICONS <--------------------- */
.material-icons,
.icon-text {
  vertical-align: middle;
  font-size: 16px;
}

.material-icons {
  padding-bottom: 3px;
  margin-right: 20px;
}
/* ICONS ---------------------> */

/* Main content */

#main {
  /*  position: absolute; */
  /*  top: 30px; */
  /*  right: 25px; */

  padding: 56px 0px 10px 10px;
  /* font-size: 20px; */
  margin-left: 45px;
  transition: margin-left 0.3s;
}

/* Some media queries for responsiveness */
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}

/* Botton Print to PDF */
.button-pdf {
  background-color: #333;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 2px 6px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 11px;
  margin: 4px 2px;
  cursor: pointer;
}
.button-pdf:hover {
  background-color: #777;
}

</style>