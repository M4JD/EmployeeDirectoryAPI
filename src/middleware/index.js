
import { buildErrorResponse } from "../controllers/response-handler.js";

export const errorHandler = (err, req, res, next) => {
    buildErrorResponse(res, err);
    next();
};

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    next();
    // if (authHeader) {
    //     const token = authHeader.split(" ")[1];
    //     if (token)
    //         jwt.verify(token, config.JWT_SECRET, (err, user) => {
    //             if (err) {
    //                 return res.sendStatus(403);
    //             }
    //             (req).user = user;
    //             next();
    //         });
    //     else
    //         res.sendStatus(401);
    // } else {
    //     res.sendStatus(401);
    // }
};