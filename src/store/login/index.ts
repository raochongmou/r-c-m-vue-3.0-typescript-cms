import { Module } from "vuex";
import ILoginState from "./type";
import IRootState from "../type";
import { IAccountLogin } from "@/service/login/type";
import { accountLoginAjax, getUsersInfo, getRoleInfo } from "@/service/login";
import localCache from "@/utils";
import router from "@/router";

const loginState: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      name: "",
      password: "",
      token: "",
      userInfo: {},
      menuList: []
    };
  },
  modules: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo;
    },
    changeMenuList(state, menuList: any) {
      state.menuList = menuList;
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccountLogin) {
      const res1 = await accountLoginAjax(payload);
      const { token, id } = res1.data;
      commit("changeToken", token);
      localCache.setCache("token", token);
      // 2.获取用户信息
      const res2 = await getUsersInfo(id);
      const userInfo = res2.data;
      commit("changeUserInfo", userInfo);
      localCache.setCache("userInfo", userInfo);
      // 3.获取角色菜单权限
      const res3 = await getRoleInfo(userInfo.role.id);
      const { data: menuList } = res3;
      localCache.setCache("menuList", menuList);
      commit("changeMenuList", menuList);
      // 跳转到首页
      router.push("/main");
    },
    initLoginAction({ commit }) {
      const token = localCache.getCache("token");
      if (token) {
        commit("changeToken", token);
      }
      const userInfo = localCache.getCache("userInfo");
      if (userInfo) {
        commit("changeUserInfo", userInfo);
      }
      const menuList = localCache.getCache("menuList");
      if (menuList) {
        commit("changeMenuList", menuList);
      }
    }
  },
  getters: {}
};

export default loginState;
