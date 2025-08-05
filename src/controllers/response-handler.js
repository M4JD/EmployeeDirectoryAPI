import ApiStatusesEnum from "../enums/api-statuses.enum.js";
import Logger from "../utils/logger.js";

const logger = new Logger("error-handler");
const buildErrorResponse = (res, error) => {
    let { statusCode, message } = err;
    if (process.env.NODE_ENV === "production" && !err.isOperational) {
        statusCode = ApiStatusesEnum.error; // Internal Server Error
        message = "Something went wrong!";//use generic error message after logging the real error for ref
    }

    res.locals.errorMessage = err.message;

    const response = {
        code: statusCode,
        message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    };

    if (process.env.NODE_ENV === "development") {
        console.error(err);
    }

    return res
        .status(ApiStatusesEnum.error)
        .json(response);
}

const buildSuccessResponse = (res, result, message = "Success", status = ApiStatusesEnum.success) => {
    const response = {
        data: result,
        status,
        message: message
    }

    return res
        .status(status)
        .json(response);
}

export { buildErrorResponse, buildSuccessResponse };