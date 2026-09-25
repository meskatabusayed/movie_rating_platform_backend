import { z } from "zod";

const createUserValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot exceed 50 characters"),

    email: z
      .string()
      .email("Please provide a valid email address"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(100, "Password cannot exceed 100 characters"),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
};