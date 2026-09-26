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

const updateSingleUserIntoDB = async (userId: string, payload: Partial<TUser>) => {
  const updatedUser = await User.findByIdAndUpdate(
    {_id : userId, isDeleted: false},
    payload,
    { new: true }
  );

  return updatedUser;
};

export const UserService = {
  createUser,
  getAllUsers,
  updateSingleUserIntoDB
};    
  