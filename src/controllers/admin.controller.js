import { loginAdminService, updateAdminProfileService } from "../services/admin.service.js";
import { uploadImage } from "../helper/uploadIMG.helper.js";
import { buildAdminProfileUpdatePayload, sanitizeAdmin } from "../util/adminProfileUpdate.js";

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
      admin: sanitizeAdmin(req.admin),
    });
  } catch (error) {
    return errorResponse(res, error.message, 401);
  }
};

export const updateCurrentAdmin = async (req, res) => {
  try {
    const adminId = req.admin?.admin_id;

    if (!adminId) {
      return errorResponse(res, "Unauthorized", 401);
    }

    let profilePictureUrl = null;

    if (req.file) {
      const uploadResult = await uploadImage(req.file.buffer, "admins");
      profilePictureUrl = uploadResult.secure_url;
    }

    const payload = buildAdminProfileUpdatePayload(req.body, profilePictureUrl);

    if (Object.keys(payload).length === 0 && !req.file) {
      return successResponse(res, "Profile updated", {
        admin: sanitizeAdmin(req.admin),
      });
    }

    const updatedAdmin = await updateAdminProfileService(adminId, payload);

    return successResponse(res, "Profile updated", {
      admin: updatedAdmin,
    });
  } catch (error) {
    return errorResponse(res, error.message, 400);
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