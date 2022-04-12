import RCMRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import localCache from "@/utils";

const rcmRequest = new RCMRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config: any) => {
      const token = localCache.getCache("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    requestInterceptorsCatch: (err) => {
      return err;
    },
    responseInterceptors: (res) => {
      return res;
    },
    responseInterceptorsCatch: (err) => {
      return err;
    }
  }
});

export default rcmRequest;
