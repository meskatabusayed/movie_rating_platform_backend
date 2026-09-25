import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest.js";
import { UserValidation } from "./user.validation.js";
import { UserController } from "./user.controller.js";



const router = Router();

router.post(
  "/register",
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.createUser
);

router.get(
  "/",
  UserController.getAllUsers
);



export const UserRoutes = router;