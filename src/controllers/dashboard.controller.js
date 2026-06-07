import { successResponse, errorResponse } from "../util/response.js";
import { getDashboardStats } from "../services/dashboard.service.js";

export const getAdminDashboard = async (req, res) => {
  try {
    const data = await getDashboardStats();
    return successResponse(res, "Dashboard loaded", data);
  } catch (error) {
    return errorResponse(res, error.message);
  }
};
