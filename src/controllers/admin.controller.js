import { loginAdminService } from "../services/admin.service.js";

import {
  successResponse,
  errorResponse
} from "../util/response.js";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await loginAdminService(email, password);

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    };

    res.cookie("token", data.token, cookieOptions);

    return successResponse(res, "Login successful", data);
  } catch (error) {
    return errorResponse(res, error.message, 401);
  }
};

export const getCurrentAdmin = async (req, res) => {
  try {
    return successResponse(res, "Authenticated admin fetched", {
      admin: req.admin,
    });
  } catch (error) {
    return errorResponse(res, error.message, 401);
  }
};

export const logoutAdmin = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/",
    });

    return successResponse(res, "Logout successful", null);
  } catch (error) {
    return errorResponse(res, error.message, 500);
  }
};