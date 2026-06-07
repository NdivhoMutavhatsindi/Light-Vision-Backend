import bcrypt from "bcryptjs";

import {findAdminByEmail} from "../repositories/admin.repository.js";

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
      email: admin.email
    }
  };
};