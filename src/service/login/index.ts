import rcmRequest from "../index";
import { IAccountLogin, IDataType, IDataLoginRes } from "./type";
enum EAccountLogin {
  loginUrl = "/login",
  usersUrl = "/users/",
  roleUrl = "/role/"
}

export function accountLoginAjax(account: IAccountLogin) {
  return rcmRequest.post<IDataLoginRes<IDataType>>({
    url: EAccountLogin.loginUrl,
    data: account
  });
}
export function getUsersInfo(id: number) {
  return rcmRequest.get<IDataLoginRes>({
    url: EAccountLogin.usersUrl + id,
    isShowLoading: false
  });
}
// 角色信息
export function getRoleInfo(id: number) {
  return rcmRequest.get<IDataLoginRes>({
    url: EAccountLogin.roleUrl + id + "/menu",
    isShowLoading: false
  });
}
