import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

const app = new Vue({
  data: {
    loading: true
  },
  router,
  render: (h) => h(App)
}).$mount("#app");

router.afterEach(() => {
  setTimeout(() => {
    app.loading = false;
  }, 1500);
});
