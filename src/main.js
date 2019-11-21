import Vue from "vue";
import App from "./App.vue";

Vue.filter("capitalize", string => {
  let [first, ...tail] = string;
  return first.toUpperCase() + tail.join("");
});

new Vue({
  el: "#app",
  render: h => h(App)
});
