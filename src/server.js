import express from "express";
import { employeeRouter } from "./routes/index.js";
import { errorHandler } from "./middleware/index.js";
import config from "./config/config.js";
import cors from "cors";
import { fetchEmployees } from "./services/employee-service.js";
import Logger from "./utils/logger.js";

const logger = new Logger("server")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(config.corsOptions));

app.use("/employee", employeeRouter);

app.use(errorHandler);

let server = app.listen(config.PORT, () => {
    logger.debug(`Server is running on port ${config.PORT}`);
    // fetch dummy data
    fetchEmployees()
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            logger.info("Server closed");
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = (error) => {
    logger.error({ error });
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);
