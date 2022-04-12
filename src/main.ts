import { createApp } from "vue";
import "./assets/css/index.less";
import "normalize.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setupState } from "./store";
// import rcmRequest from "./service";
import * as Icons from "@element-plus/icons-vue";
// import "./service/axios_demo";
// import { BASE_URL, BASE_NAME } from "./service/request/config";
// import { globalRegister } from "./global";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import "element-plus/theme-chalk/el-button.css";
// import "element-plus/theme-chalk/base.css";

const app = createApp(App);

// interface DataType {
//   data: any;
//   returnCode: string;
//   success: boolean;
// }

// rcmRequest
//   .get<DataType>({
//     url: "/home/multidata",
//     interceptors: {
//       requestInterceptors: (config) => {
//         return config;
//       },
//       responseInterceptors: (res) => {
//         return res;
//       }
//     },
//     isShowLoading: false
//   })
//   .then((res) => {
//     return res;
//   });
// console.log(process.env.VUE_APP_BASE_NAME);
// console.log(process.env.VUE_APP_BASE_URL);
// 注册全局组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});

// globalRegister(app);
// app.use(ElementPlus);
// app.use(globalRegister);
app.use(router).use(store).mount("#app");

setupState();
