import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import rcmRequest from "./service";
// import "./service/axios_demo";
// import { BASE_URL, BASE_NAME } from "./service/request/config";
// import { globalRegister } from "./global";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import "element-plus/theme-chalk/el-button.css";
// import "element-plus/theme-chalk/base.css";

const app = createApp(App);

rcmRequest.request({
  url: "/home/multidata",
  method: "get"
});
// console.log(BASE_URL);
// console.log(BASE_NAME);
// console.log(process.env.VUE_APP_BASE_NAME);

// globalRegister(app);
// app.use(ElementPlus);
// app.use(globalRegister);
app.use(router);
app.mount("#app");
