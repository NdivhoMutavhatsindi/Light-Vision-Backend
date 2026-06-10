import { errorResponse } from "../util/response.js";

// Generic Express error handler with improved logging
const errorHandler = (err, req, res, next) => {
	if (process.env.NODE_ENV === 'development') {
		console.error(err.stack || err);
	} else {
		console.error(err.message || err);
	}

	const message = err.message || "Internal Server Error";
	const status = err.statusCode || 500;

	// In development expose stack to client for faster debugging
	if (process.env.NODE_ENV === 'development') {
		return res.status(status).json({
			success: false,
			message,
			error: err.stack || err,
		});
	}

	return errorResponse(res, message, status);
};

export default errorHandler;
