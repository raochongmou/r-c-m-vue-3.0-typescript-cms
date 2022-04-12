import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface RCMInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  responseInterceptors?: (res: T) => T;
  // responseInterceptors?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorsCatch?: (err: any) => any;
}

export interface RCMConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RCMInterceptors<T>;
  isShowLoading?: boolean;
}
