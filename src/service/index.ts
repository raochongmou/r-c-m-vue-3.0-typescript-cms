import RCMRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";

const rcmRequest = new RCMRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
});

export default rcmRequest;
