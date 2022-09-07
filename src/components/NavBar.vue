<template>
  <div>
    <!-- Nav bar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" @click="hudsonPage"
          ><span style="color: red; font-size: 18px">TEC</span
          ><span style="color: white; font-size: 18px">Connector</span></a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <!-- Open / Close -->
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click="toggleSidebar"
                ><i id="menuIcon" class="material-icons">menu</i
                ><span class="icon-text"></span
              ></a>
            </li>
            <!-- Full Screen -->
            <li class="nav-item">
              <a
                id="btnFullscreen"
                class="nav-link active"
                aria-current="page"
                href="#"
                @click="showFullScreen"
                ><i id="menuIcon" class="material-icons">fullscreen</i
                ><span class="icon-text"></span
              ></a>
            </li>

            <!-- <li class="nav-item active"> <a class="nav-link" href="/">Home </a> </li> -->
            <!-- <li class="nav-item"><a class="nav-link" href="#"> About </a></li> -->
            <li class="nav-item">
              <button
                class="links"
                @click="this.displayBlock = !this.displayBlock"
              >
                Power Meters <i id="menuIcon" class="material-icons">down</i
                ><span class="icon-text"></span>
              </button>

              <div
                v-if="displayBlock"
                class="dropdownHidden"
                v-click-outside="closeAll"
              >
                <a href="#" @click="mainPage">Main Meters</a>
                <a href="#" @click="pm1Page" @mouseover="showLink2">PM 1 >></a>
                <a href="#" @click="pm2Page" @mouseover="showLink3">PM 2 >></a>
                <a href="#" @click="pm3Page" @mouseover="showLink4">PM 3 >></a>
                <a href="#" @click="pm4Page" @mouseover="showLink5">PM 4 >></a>
              </div>

              <div
                v-click-outside="closeAll"
                v-if="hover2"
                class="dropdownLink2"
                @mouseleave="hideLink"
              >
                <a href="#" @click="bm1Page" @mouseover="showLink5">BM 1 >></a>
                <a href="#" @click="bm2Page" @mouseover="showLink6">BM 2 >></a>
              </div>
              <div
                v-click-outside="closeAll"
                v-if="hover5"
                class="dropdownLink5"
                @mouseleave="hideLink1"
              >
                <a href="#" @click="lm19Page">lm19</a>
                <a href="#" @click="lm20Page">lm 20</a>
                <a href="#" @click="lm21Page">lm 21 </a>
                <a href="#" @click="lm23Page">lm 23 </a>
                <a href="#" @click="lm24Page">lm 24 </a>
              </div>
              <div
                v-click-outside="closeAll"
                v-if="hover6"
                class="dropdownLink6"
                @mouseleave="hideLink2"
              >
                <a href="#" @click="lm13Page">lm13</a>
                <a href="#" @click="lm14Page">lm 14</a>
              </div>

              <div
                v-click-outside="closeAll"
                v-if="hover3"
                class="dropdownLink3"
                @mouseleave="hideLink3"
              >
                <a href="#" @click="bm3Page">BM 3</a>
                <a href="#" @click="bm8Page" @mouseover="showLink7">BM 8 >></a>
              </div>

              <div
                v-click-outside="closeAll"
                v-if="hover7"
                class="dropdownLink7"
                @mouseleave="hideLink7"
              >
                <a href="#" @click="lm7Page">LM 7</a>
              </div>
              <div
                v-click-outside="closeAll"
                v-if="hover4"
                class="dropdownLink4"
                @mouseleave="hideLink8"
              >
                <a href="#" @click="bm4Page">BM 4</a>
                <a href="#" @click="bm5Page">BM 5</a>
              </div>
              <div v-if="hover8" class="dropdownLink8" @mouseleave="hideLink">
                <a href="#" @click="cm2Page">CM 2 >></a>
                <a href="#" @click="cm3Page">CM 3</a>
              </div>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Disabled Search"
              aria-label="Search"
              disabled
            />
            <button class="btn btn-dark btn-sm" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import moment from "moment";
import {
  collapsed,
  toggleSidebar,
  sidebarWidth,
  toggleEnter,
} from "./state.js";

export default {
  data() {
    return {
      selectedValue: "",
      value: "",
      value1: "",
      button1: "main",

      displayBlock: false,
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      hover6: false,
      hover7: false,
    };
  },
  components: {},

  created() {},
  methods: {
    toggleSidebar() {
      toggleSidebar;
    },
    closeAll() {
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
    },
    hudsonPage() {
      this.$router.push({ path: "/hudsonPage", name: "hudson" });
    },
    selected() {
      this.value = this.selectedValue.toLowerCase();

      this.$store.dispatch("changeRoute", this.value);
      setInterval(() => {
        this.$store.dispatch("changeRoute", this.value);
      }, 1000);
      this.$router.push({ path: `/pmdashboard/${this.value}` });

      this.$store.dispatch("changeStartDate", this.$store.getters.start);
      this.$store.dispatch("changeEndDate", this.$store.getters.end);
      this.$store.dispatch("fetchGaugeData");
    },
    mainPage() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "main");

      this.$router.push({ path: "/pmdashboard/main" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    pm1Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "pm1");

      this.$router.push({ path: "/pmdashboard/pm1" });

      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.$store.dispatch("fetchGaugeData");
    },
    bm5Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "bm5");

      this.$router.push({ path: "/pmdashboard/bm5" });

      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.$store.dispatch("fetchGaugeData");
    },
    pm2Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "pm2");

      this.$router.push({ path: "/pmdashboard/pm2" });

      this.$store.dispatch("fetchGaugeData");

      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
    },
    pm2Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "pm2");

      this.$router.push({ path: "/pmdashboard/pm2" });

      this.$store.dispatch("fetchGaugeData");

      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
    },

    bm4Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "bm4");

      this.$router.push({ path: "/pmdashboard/bm4" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    bm1Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "bm1");

      this.$router.push({ path: "/pmdashboard/bm1" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    bm2Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "bm2");

      this.$router.push({ path: "/pmdashboard/bm2" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    bm3Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "bm3");

      this.$router.push({ path: "/pmdashboard/bm3" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    bm8Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "bm8");

      this.$router.push({ path: "/pmdashboard/bm8" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    cm2Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "cm2");

      this.$router.push({ path: "/pmdashboard/cm2" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover8=false;

      this.$store.dispatch("fetchGaugeData");
    },
    lm19Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "lm19");

      this.$router.push({ path: "/pmdashboard/lm19" });
      this.displayBlock = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover5 = false;
      this.$store.dispatch("fetchGaugeData");
    },
    cm3Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "cm3");

      this.$router.push({ path: "/pmdashboard/cm3" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover8=false;

      this.$store.dispatch("fetchGaugeData");
    },
    lm20Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "lm20");

      this.$router.push({ path: "/pmdashboard/lm20" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    lm21Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "lm21");

      this.$router.push({ path: "/pmdashboard/lm21" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    lm23Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "lm23");

      this.$router.push({ path: "/pmdashboard/lm23" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    lm24Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "lm24");

      this.$router.push({ path: "/pmdashboard/lm24" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    lm13Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "lm13");

      this.$router.push({ path: "/pmdashboard/lm13" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover5 = false;
      this.hover6 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    lm14Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "lm14");

      this.$router.push({ path: "/pmdashboard/lm14" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover5 = false;
      this.hover6 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    lm7Page() {
      this.$store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));
      this.$store.dispatch("changeRoute", "lm7");

      this.$router.push({ path: "/pmdashboard/lm7" });
      this.displayBlock = false;
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover5 = false;
      this.hover6 = false;
      this.hover7 = false;

      this.$store.dispatch("fetchGaugeData");
    },
    drop() {
      this.displayBlock = true;
    },
    showLink1() {
      this.hover1 = true;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
    },
    showLink2() {
      this.hover2 = true;
      this.hover1 = false;
      this.hover3 = false;
      this.hover4 = false;
    },

    showLink3() {
      this.hover3 = true;
      this.hover2 = false;
      this.hover1 = false;
      this.hover4 = false;
    },
    showLink4() {
      this.hover1 = false;
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = true;
      this.hover8 = false;
    },
    showLink5() {
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover5 = false;
      this.hover6 = false;
      this.hover8=true;
    },
    showLink6() {
      this.hover2 = true;
      this.hover3 = false;
      this.hover4 = false;
      this.hover5 = false;
      this.hover6 = true;
      this.displayBlock = true;
    },
    showLink7() {
      this.hover7 = true;
      this.hover2 = false;
      this.hover3 = true;
      this.hover4 = false;
      this.hover5 = false;
      this.hover6 = false;
      this.displayBlock = true;
    },
    hideLink1() {
      this.hover2 = false;
      this.hover5 = false;
      this.hover8=false;
    },
    hideLink2() {
      this.hover2 = false;
      this.hover5 = false;
      this.hover6 = false;
      this.hover6 = false;
    },
    hideLink3() {
      this.hover2 = false;
      this.hover3 = false;
      this.hover4 = false;
      this.hover5 = false;
      this.hover6 = false;
    },
    hideLink7() {
      this.hover2 = false;
      this.hiver3 = false;
      this.hover7 = false;
    },
    hideLink() {
      this.hover3 = false;
      this.hover4 = false;
    },
    selectedbtn1() {
      this.$router.push({ path: `/pmdashboard/${main}` });
      this.$store.dispatch("changeRoute", "main");
      this.$store.dispatch("fetchGaugeData");
    },
  },
  mounted() {
    this.$store.dispatch("fetchGaugeData");

    this.mainPage();
  },
};
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

.material-icons {
  font-family: "Material Icons";
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

/* The container <div> - needed to position the dropdown content */
.dropdownHidden {
  position: relative;
  display: inline-block;
  top: 57px;
  border: 0.5px solid #e9ecef;
}

/* Dropdown Content (Hidden by Default) */

.dropdownHidden a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdownHidden a:hover {
  background-color: #e9ecef;
}

.dropdownHidden {
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdownLink1 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdownLink1 a:hover {
  background-color: #e9ecef;
}
.dropdownLink2 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdownLink2 a:hover {
  background-color: #e9ecef;
}
.dropdownLink5 {
  position: relative;
  display: inline-block;
  border: 0.5px solid #e9ecef;
}
.dropdownLink5 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdownLink5 a:hover {
  background-color: #e9ecef;
}
.dropdownLink5 {
  display: block;
  position: absolute;
  left: 570px;
  top: 100px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdownLink6 {
  position: relative;
  display: inline-block;
  border: 0.5px solid #e9ecef;
}
.dropdownLink6 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdownLink6 a:hover {
  background-color: #e9ecef;
}
.dropdownLink6 {
  display: block;
  position: absolute;
  left: 570px;
  top: 100px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdownLink1 {
  position: relative;
  display: inline-block;
}
.links {
  background-color: transparent;
  color: white;
  border: 0px;
}
.dropdownLink1 {
  display: block;
  position: absolute;
  left: 400px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdownLink2 {
  position: relative;
  display: inline-block;
  border: 0.5px solid #e9ecef;
}
.dropdownLink2 {
  display: block;
  position: absolute;
  left: 411px;
  top: 100px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.dropdownLink3 {
  position: relative;
  display: inline-block;
  border: 0.5px solid #e9ecef;
}
.dropdownLink3 {
  display: block;
  position: absolute;
  left: 411px;
  top: 150px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdownLink3 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdownLink3 a:hover {
  background-color: #e9ecef;
}
.dropdownLink7 {
  position: relative;
  display: inline-block;
  border: 0.5px solid #e9ecef;
}
.dropdownLink7 {
  display: block;
  position: absolute;
  left: 570px;
  top: 200px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdownLink7 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdownLink7 a:hover {
  background-color: #e9ecef;
}
.dropdownLink4 {
  position: relative;
  display: inline-block;
  border: 0.5px solid #e9ecef;
}
.dropdownLink4 {
  display: block;
  position: absolute;
  left: 411px;
  top: 200px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdownLink4 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdownLink4 a:hover {
  background-color: #e9ecef;
}
.dropdownLink8 {
  position: relative;
  display: inline-block;
  border: 0.5px solid #e9ecef;
}
.dropdownLink8 {
  display: block;
  position: absolute;
  left: 411px;
  top: 200px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdownLink8 a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdownLink8 a:hover {
  background-color: #e9ecef;
}
.links {
  position: relative;
  top: 8px;
  font-family: "Poppins", sans-serif;
  font-size: small;
  color: #676a6c;
}
.links:hover {
  color: white;
}
</style>