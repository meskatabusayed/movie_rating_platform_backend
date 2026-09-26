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

router.put(
  "/:userId",
  UserController.updateSingleUser
);


export const UserRoutes = router;