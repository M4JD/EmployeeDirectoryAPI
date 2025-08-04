import Logger from "../utils/logger.js";

const logger = new Logger("error-handler");
const buildErrorResponse = (error) => {
    logger.error({ error });
    return {
        status: 500,
        message: error.message
    }
}
const buildSuccessResponse = (result, status, message = "Success") => {
    return {
        data: result,
        status,
        message: message
    }
}

export { buildErrorResponse, buildSuccessResponse };