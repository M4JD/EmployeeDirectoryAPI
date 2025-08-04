
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const errorHandler = (err, req, res, next) => {
    let { statusCode, message } = err;
    if (process.env.NODE_ENV === "production" && !err.isOperational) {
        statusCode = 500; // Internal Server Error
        message = "Internal Server Error";
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

    res.status(statusCode).json(response);
    next();
};

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    next();
    return
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        if (token)
            jwt.verify(token, config.JWT_SECRET, (err, user) => {
                if (err) {
                    return res.sendStatus(403);
                }
                (req).user = user;
                next();
            });
        else
            res.sendStatus(401);
    } else {
        res.sendStatus(401);
    }
};