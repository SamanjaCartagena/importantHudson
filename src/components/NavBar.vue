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
            <a id="btnFullscreen" class="nav-link active" aria-current="page" href="#"><i id="menuIcon"
                class="material-icons">fullscreen</i><span class="icon-text"></span></a>
          </li>

          <!-- <li class="nav-item active"> <a class="nav-link" href="/">Home </a> </li> -->
          <!-- <li class="nav-item"><a class="nav-link" href="#"> About </a></li> -->
          <li class="nav-item dropdown" id="myDropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Power Meters </a>
            <ul class="dropdown-menu">
              <li> <a class="dropdown-item" href="/pmdashboard"> Main Meters </a></li>
              <li> <a class="dropdown-item" href="/pmdashboard/pm1"> PM 1 &raquo; </a>
                <ul class="submenu dropdown-menu">
                  <li><a class="dropdown-item" href="/pmdashboard/bm1">BM 1 &raquo; </a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/pmdashboard/lm19">LM 19</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm20">LM 20</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm21">LM 21</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm23">LM 23</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm24">LM 24</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/pmdashboard/bm2">BM 2 &raquo; </a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/pmdashboard/lm13">LM 13</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm14">LM 14</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a class="dropdown-item" href="/pmdashboard/pm2"> PM 2 &raquo; </a>
                <ul class="submenu dropdown-menu">
                  <li><a class="dropdown-item" href="/pmdashboard/bm3">BM 3</a></li>
                  <li><a class="dropdown-item" href="/pmdashboard/bm8">BM 8 &raquo; </a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/pmdashboard/lm7">LM 7</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm8">LM 8</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a class="dropdown-item" href="/pmdashboard/pm3"> PM 3  &raquo; </a>
                <ul class="submenu dropdown-menu">
                  <li><a class="dropdown-item" href="/pmdashboard/bm4">BM 4</a></li>
                  <li><a class="dropdown-item" href="/pmdashboard/bm5">BM 5</a></li>
                </ul>
              </li>
              <li><a class="dropdown-item" href="/pmdashboard/pm4"> PM 4 &raquo; </a>
                <ul class="submenu dropdown-menu">
                  <li><a class="dropdown-item" href="/pmdashboard/cm2">CM 2 &raquo; </a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/pmdashboard/lm26">LM 26</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm27">LM 27</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm28">LM 28</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm30">LM 30</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm32">LM 32</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm35">LM 35</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm36">LM 36</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm37">LM 37</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm42">LM 42</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm43">LM 43</a></li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/pmdashboard/cm3">CM 3 &raquo; </a>
                    <ul class="submenu dropdown-menu">
                      <li><a class="dropdown-item" href="/pmdashboard/cm6">CM 6 &raquo; </a>
                        <ul class="submenu dropdown-menu">
                          <li><a class="dropdown-item" href="/pmdashboard/bm9">BM 9</a></li>
                          <li><a class="dropdown-item" href="/pmdashboard/bm10">BM 10</a></li>
                          <li><a class="dropdown-item" href="/pmdashboard/bm11">BM 11</a></li>
                          <li><a class="dropdown-item" href="/pmdashboard/bm12">BM 12</a></li>
                        </ul>
                      </li>
                      <li><a class="dropdown-item" href="/pmdashboard/cm7">CM 7</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/cm8">CM 8 &raquo; </a>
                        <ul class="submenu dropdown-menu">
                          <li><a class="dropdown-item" href="/pmdashboard/bm13">BM 13</a></li>
                          <li><a class="dropdown-item" href="/pmdashboard/bm14">BM 14</a></li>
                        </ul>
                      </li>
                      <li><a class="dropdown-item" href="/pmdashboard/cm9">CM 9 &raquo; </a>
                        <ul class="submenu dropdown-menu">
                          <li><a class="dropdown-item" href="/pmdashboard/bm19">BM 19</a></li>
                          <li><a class="dropdown-item" href="/pmdashboard/bm20">BM 20</a></li>
                          <li><a class="dropdown-item" href="/pmdashboard/bm21">BM 21</a></li>
                        </ul>
                      </li>
                      <li><a class="dropdown-item" href="/pmdashboard/cm10">CM 10 &raquo; </a>
                        <ul class="submenu dropdown-menu">
                          <li><a class="dropdown-item" href="/pmdashboard/bm25">BM 25</a></li>
                          <li><a class="dropdown-item" href="/pmdashboard/bm26">BM 26</a></li>
                        </ul>
                      </li>
                      <li><a class="dropdown-item" href="/pmdashboard/cm11">CM 11 &raquo; </a>
                        <ul class="submenu dropdown-menu">
                          <li><a class="dropdown-item" href="/pmdashboard/bm27">BM 27</a></li>
                          <li><a class="dropdown-item" href="/pmdashboard/bm28">BM 28</a></li>
                        </ul>
                      </li>
                      <li><a class="dropdown-item" href="/pmdashboard/cm12">CM 12</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm1">LM 1</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm2">LM 2</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm3">LM 3</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm4">LM 4</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm5">LM 5</a></li>
                      <li><a class="dropdown-item" href="/pmdashboard/lm6">LM 6</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
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
    document.addEventListener("DOMContentLoaded", function () {
      // make it as accordion for smaller screens
      if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
          everydropdown.addEventListener('hidden.bs.dropdown', function () {
            // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
          })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
          element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if (nextEl && nextEl.classList.contains('submenu')) {
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if (nextEl.style.display == 'block') {
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }

            }
          });
        })
      }
      // end if innerWidth
    });
  // DOMContentLoaded  end
    },
  methods:{
    
    selected(){
      this.value = this.selectedValue.toLowerCase()
      
            this.$store.dispatch('changeRoute',this.value)
            setInterval(()=>{this.$store.dispatch('changeRoute',this.value)},1000)
      console.log("The value selected is "+this.value)
      this.$router.push({path:`/pmdashboard/${this.value}`})
     
     // this.$store.dispatch('changeRoute',this.value)
      console.log("the route has been changed to "+this.$store.state.currentRoute)
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
      .dropdown-menu li {
        position: relative;
      }

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

      .dropdown-menu>li:hover {
        background-color: #f1f1f1
      }

      .dropdown-menu>li:hover>.submenu {
        display: block;
      }
    }

    /* ============ desktop view .end// ============ */

    /* ============ small devices ============ */
    @media (max-width: 991px) {
      .dropdown-menu .dropdown-menu {
        margin-left: 0.7rem;
        margin-right: 0.7rem;
        margin-bottom: .5rem;
      }
    }
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
.dropdown-container {
  display: none;
  background-color: rgb(22, 22, 22);
  padding-left: 55px;
}

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