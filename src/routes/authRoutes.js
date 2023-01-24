import { Router } from "express";
import { SignIn, SignUp } from "../controllers/auth.control.js";
import { userSchemaValidation, siginInValidation } from "../middlewares/validationAuth.js";

 const router = Router();
router.post("/sign-up", userSchemaValidation, SignUp);
router.post("/sign-in",siginInValidation, SignIn);


export default router

