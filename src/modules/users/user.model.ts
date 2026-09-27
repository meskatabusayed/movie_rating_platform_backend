import { Schema, model } from "mongoose";
import type { TUser } from "./user.interface.js";
import { USER_Role } from "./user.constant.js";
import bcrypt from "bcryptjs";


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

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, Number(process.env.BRYPT_SALT_ROUNDS));
});

export const User = model<TUser>("User", userSchema);