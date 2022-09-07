<template>
  <div>
    <div class="block">
      <span class="demonstration">Date Range<br /></span>
      <el-date-picker
        v-model="value2"
        type="datetimerange"
        :shortcuts="shortcuts"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        value-format="YYYY-MM-DD"
        @change="datePicked($event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "../store";
import moment from "moment";
const value2 = ref([
  moment().format("YYYY-MM-DD"),
  moment().format("YYYY-MM-DD"),
]);
const datePicked = (event) => {
  console.log("The date was changed from" + event[0] + " and " + event[1]);
  store.dispatch("changeStartDate", event[0]);
  store.dispatch("changeEndDate", event[1]);
  store.dispatch("fetchGaugeData");
};

const shortcuts = [
  {
    text: "Today",
    value: () => {
      const end = moment().format("YYYY-MM-DD");
      const start = moment().format("YYYY-MM-DD");

      store.dispatch("changeStartDate", moment().format("YYYY-MM-DD"));
      store.dispatch("changeEndDate", moment().format("YYYY-MM-DD"));

      store.dispatch("fetchGaugeData");

      return [start, end];
    },
  },
  {
    text: "Yesterday",
    value: () => {
      const end = moment().subtract(1, "days").format("YYYY-MM-DD");
      const start = moment().subtract(1, "days").format("YYYY-MM-DD");

      console.log("The start is " + start);
      console.log("The end is " + end);
      store.dispatch("changeStartDate", start);

      store.dispatch("changeEndDate", end);

      store.dispatch("fetchGaugeData");

      return [start, end];
    },
  },
  {
    text: "Last 7 days",
    value: () => {
      const end = moment().format("YYYY-MM-DD");
      const start = moment().subtract(6, "days").format("YYYY-MM-DD");

      store.dispatch("changeStartDate", start);
      store.dispatch("changeEndDate", end);
      store.dispatch("fetchGaugeData");

      return [start, end];
    },
  },
  {
    text: "Last 30 days",
    value: () => {
      const end = moment().format("YYYY-MM-DD");
      const start = moment().subtract(30, "days").format("YYYY-MM-DD");
      store.dispatch("changeStartDate", start);
      store.dispatch("changeEndDate", end);
      store.dispatch("fetchGaugeData");

      return [start, end];
    },
  },
  {
    text: "Custom Range",
  },
  {
    text: "This month",
    value: () => {
      const end = moment().format("YYYY-MM-DD");
      const start = moment().subtract(30, "days").format("YYYY-MM-DD");
      store.dispatch("changeStartDate", start);
      store.dispatch("changeEndDate", end);
      store.dispatch("fetchGaugeData");

      return [start, end];
    },
  },
];
methods: {
}
</script>

<style>
.demonstration {
  cursor: pointer;
}
</style>