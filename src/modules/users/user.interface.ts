import type { USER_Role } from "./user.constant.js";


export type TUser = {
  name: string;
  email: string;
  password: string;
  role: keyof typeof USER_Role;  isDeleted: boolean;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}