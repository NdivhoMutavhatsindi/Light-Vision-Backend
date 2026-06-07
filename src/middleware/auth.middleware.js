import jwt from "jsonwebtoken";
import prisma from "../config/database.js";
import { findAdminById } from "../repositories/admin.repository.js";

const parseCookies = (cookieHeader) => {
  return cookieHeader.split(';').reduce((cookies, pair) => {
    const [name, ...rest] = pair.split('=');
    cookies[name?.trim()] = decodeURIComponent(rest.join('=').trim() || '');
    return cookies;
  }, {});
};

export const protectAdmin = async (req, res, next) => {
  try {
    let token = null;

    if (req.headers.authorization?.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.headers.cookie) {
      const cookies = parseCookies(req.headers.cookie);
      token = cookies.token;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const adminRecord = decoded?.admin_id ? await findAdminById(decoded.admin_id) : null;
    req.admin = adminRecord || decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }
};