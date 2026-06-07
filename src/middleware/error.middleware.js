import { errorResponse } from "../util/response.js";

// Generic Express error handler
const errorHandler = (err, req, res, next) => {
	console.error(err);
	const message = err.message || "Internal Server Error";
	const status = err.statusCode || 500;
	return errorResponse(res, message, status);
};

export default errorHandler;
