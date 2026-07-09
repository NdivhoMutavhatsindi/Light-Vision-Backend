import express from "express";

import {
  loginAdmin,
  getCurrentAdmin,
  logoutAdmin,
  updateCurrentAdmin,
} from "../controllers/admin.controller.js";

import {
  validateLogin
} from "../validators/admin.validator.js";

import { protectAdmin } from "../middleware/auth.middleware.js";
import upload from "../middleware/uploadIMG.middleware.js";

const router = express.Router();

router.post(
  "/login",
  validateLogin,
  loginAdmin
);

router.get(
  "/me",
  protectAdmin,
  getCurrentAdmin
);

router.put(
  "/me",
  protectAdmin,
  upload.single("profilePicture"),
  updateCurrentAdmin
);

router.post(
  "/logout",
  logoutAdmin
);

export default router;