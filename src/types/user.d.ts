type UserRole = {
    id: number;
    name: string;
  };
  
  export interface IUser {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    lastLoginDate?: Date;
    role?: string;
    phone?: string;
    roleName: string;
  }
  
//   export interface Iuser {
//     success: boolean;
//     token: string?;
//     expireTime: number;
//     firstName: string;
//     lastName: string;
//     userDetails: {
//       firstName: string;
//       lastName: string;
//       email: string;
//       phone: string;
//       languageId: string;
//       id: number;
//       notifyByEmail: boolean;
//       notifyBySMS: boolean;
//       dataModels: [
//         {
//           id: number;
//           roleName: string;
//           roleId: number;
//           permissions: Array<string>;
//           viewSetId: number;
//           featurePlan: {
//             name: string;
//             details: {
//               all: boolean;
//             };
//             id: number;
//           };
//         },
//       ];
//     };
//   }
  
export interface Iuser {
    success: boolean;
    token: string;
    email: string;
    firstName: string;
    lastName: string;
   
  }
  export interface IPutUser {
    firstName?: string;
    lastName?: string;
    email?: string;
    token?: string;
    password?: string;
    phone?: string;
    confirmPassword?: string;
    updatePassword?: string; //optional field will be removed by server
    notifyByEmail?: boolean;
    notifyBySMS?: boolean;
  }
  export interface IChangePassword {
    oldPassword: string;
    newPassword: string;
    retypePassword: string;
    token?: string;
  }
  
  export interface ISignUp {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
  }