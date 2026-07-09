import bcrypt from "bcryptjs";

import {findAdminByEmail, updateAdminProfile} from "../repositories/admin.repository.js";

import generateToken from "../util/generateToken.js";
import { sanitizeAdmin } from "../util/adminProfileUpdate.js";

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
      phone: admin.phone,
      bio: admin.bio,
      profile_picture_url: admin.profile_picture_url,
    }
  };
};

export const updateAdminProfileService = async (admin_id, data) => {
  const updatedAdmin = await updateAdminProfile(admin_id, data);
  return sanitizeAdmin(updatedAdmin);
};