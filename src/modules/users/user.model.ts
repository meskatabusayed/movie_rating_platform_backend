import { Schema, model } from "mongoose";
import type { TUser } from "./user.interface.js";
import { USER_Role } from "./user.constant.js";


const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    role: {
    type: String,
    required: [true, "Role is required"],
    enum: Object.keys(USER_Role),
  },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<TUser>("User", userSchema);