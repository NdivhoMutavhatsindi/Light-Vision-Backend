import bcrypt from "bcryptjs";

import {
  findAdminByEmail,
  updateAdminProfile as updateAdminProfileRepo,
} from "../repositories/admin.repository.js";
import { uploadImage } from "../helper/uploadIMG.helper.js";

import generateToken from "../util/generateToken.js";

export const loginAdminService = async (
  email,
  password
) => {

  const admin = await findAdminByEmail(email);

  if (!admin) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    admin.password_hash
  );

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  const token = generateToken(admin);

  return {
    token,
    admin: {
      admin_id: admin.admin_id,
      email: admin.email,
      first_name: admin.first_name,
      last_name: admin.last_name,
      profile_image: admin.profile_image,
    }
  };
};

export const updateAdminProfileService = async (adminId, payload = {}, file) => {
  const updateData = {};

  if (payload.first_name !== undefined) {
    updateData.first_name = payload.first_name?.trim() || null;
  }

  if (payload.last_name !== undefined) {
    updateData.last_name = payload.last_name?.trim() || null;
  }

  if (file) {
    const result = await uploadImage(file.buffer);
    updateData.profile_image = result.secure_url;
  }

  return await updateAdminProfileRepo(adminId, updateData);
};