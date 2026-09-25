import type { TUser } from "./user.interface.js";
import { User } from "./user.model.js";



const createUser = async (payload: TUser) => {
  const { name, email, password } = payload;

  // Check existing user
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  const user = await User.create({
    name,
    email,
    password,
    role: "USER",
  });

  return user;
};

const getAllUsers = async () => {
  const users = await User.find({
    isDeleted: false,
  });

  return users;
};

const getSingleUser = async (id: string) => {
  const user = await User.findOne({
    _id: id,
    isDeleted: false,
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
};