import axios from "axios";
import type { AxiosInstance } from "axios";
import { RCMConfig, RCMInterceptors } from "./type";
import { ElLoading } from "element-plus";
// import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type";
import { LoadingInstance } from "element-plus/lib/components/loading/src/loading";
// import "element-plus/lib/components/loading/style/css";

const DEFAULT_LOADING = true;
class RCMRequest {
  instance: AxiosInstance;
  interceptors?: RCMInterceptors;
  isShowLoading: boolean;
  isLoading?: LoadingInstance;
  constructor(config: RCMConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    // isShowLoading默认值
    this.isShowLoading = DEFAULT_LOADING;

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    );
    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 设置loading加载画面
        if (this.isShowLoading === true) {
          this.isLoading = ElLoading.service({
            lock: true,
            text: "loading......",
            background: "rgba(0, 0, 0, 0.5)"
          });
        }
        return config;
      },
      (err) => {
        console.log("全局请求的拦截器, 请求失败的拦截器");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        console.log("全局响应的拦截器, 响应成功的拦截器");
        //请求成功移除loading动画
        this.isLoading?.close();
        // console.log(res);
        return res.data;
      },
      (err) => {
        console.log("全局响应的拦截器, 响应失败的拦截器");
        //请求失败移除loading动画
        this.isLoading?.close();
        return err;
      }
    );
  }
  request<T>(config: RCMConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config);
        console.log("config", config);
        return config;
      }
      if (config.isShowLoading === false) {
        this.isShowLoading = config.isShowLoading;
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res);
            return res;
          }
          // 将上次修改过的loading动画设置成初始值给下一次默认使用
          this.isShowLoading = DEFAULT_LOADING;
          resolve(res);
          return res;
        })
        .catch((err) => {
          // 将上次修改过的loading动画设置成初始值给下一次默认使用
          this.isShowLoading = DEFAULT_LOADING;
          reject(err);
          return err;
        });
    });
  }
  get<T>(config: RCMConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  put<T>(config: RCMConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PUT" });
  }
  post<T>(config: RCMConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  patch<T>(config: RCMConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
  delete<T>(config: RCMConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }
}

export default RCMRequest;
