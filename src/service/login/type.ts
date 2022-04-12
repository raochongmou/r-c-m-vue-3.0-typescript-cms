export interface IAccountLogin {
  name: string;
  password: string;
}

export interface IDataType {
  token: string;
  id: number;
  name: string;
}

export interface IDataLoginRes<T = any> {
  code: number;
  data: T;
}

// json to ts在线工具
// declare module namespace {

//   export interface Role {
//       id: number;
//       name: string;
//       intro: string;
//       createAt: Date;
//       updateAt: Date;
//   }

//   export interface Department {
//       id: number;
//       name: string;
//       parentId?: any;
//       createAt: Date;
//       updateAt: Date;
//       leader: string;
//   }

//   export interface RootObject {
//       id: number;
//       name: string;
//       realname: string;
//       cellphone: number;
//       enable: number;
//       createAt: Date;
//       updateAt: Date;
//       role: Role;
//       department: Department;
//   }

// }
