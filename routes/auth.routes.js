import { registerPatient } from "../controllers/auth/registerPatient.controller.js";
import { loginPatient } from "../controllers/auth/loginPatient.controller.js";
//import { registerDoctor } from "../controllers/auth/registerDoctor.controller.js";
//import { loginDoctor } from "../controllers/auth/loginDoctor.controller.js";

import express from "express";

const router = express.Router();
// auth routes

router.post("/patient/signup",registerPatient)
router.post("/patient/login", loginPatient);



export default router;
