import express from "express";

import {
  loginAdmin,
  getCurrentAdmin,
  logoutAdmin,
  updateAdminProfile,
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

router.post(
  "/logout",
  logoutAdmin
);

router.patch(
  "/profile",
  protectAdmin,
  upload.single("image"),
  updateAdminProfile
);

export default router;