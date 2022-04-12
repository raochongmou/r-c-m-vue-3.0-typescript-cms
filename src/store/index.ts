import { createStore } from "vuex";
import IRootState from "./type";
import loginState from "./login";

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "coderwhy",
      password: "123456"
    };
  },
  modules: {
    loginState
  }
});

export function setupState() {
  store.dispatch("loginState/initLoginAction");
}

export default store;
