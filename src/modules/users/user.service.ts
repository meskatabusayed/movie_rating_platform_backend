import type { TUser } from "./user.interface.js";
import { User } from "./user.model.js";



const createAdminIntoDB = async (payload: TUser) => {
  const { name, email, password } = payload;

  // Check existing user
  const existingAdmin = await User.findOne({ email });

  if (existingAdmin) {
    throw new Error("Admin already exists with this email");
  }

  const admin = await User.create({
    name,
    email,
    password,
    role: "ADMIN",
  });

  return admin;
};

const getAllUsers = async () => {
  const users = await User.find({
    isDeleted: false,
  });

  return users;
};

const updateSingleUserIntoDB = async (userId: string, payload: Partial<TUser>) => {
  const updatedUser = await User.findByIdAndUpdate(
    {_id : userId, isDeleted: false},
    payload,
    { new: true }
  );

  return updatedUser;
};

export const UserService = {
  createAdminIntoDB,
  getAllUsers,
  updateSingleUserIntoDB
};    
  