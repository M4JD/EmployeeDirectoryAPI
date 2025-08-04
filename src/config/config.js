import { config } from "dotenv"

const configFilePath = `./.env`;
config({ path: configFilePath });

const {
    PORT,
    JWT_SECRET,
    NODE_ENV,
    FRONT_END_URL,
    APPNAME
} = process.env;

const corsOptions = {
    origin: FRONT_END_URL,
    optionsSuccessStatus: 200,
};

export default {
    FRONT_END_URL,
    APPNAME,
    PORT,
    JWT_SECRET,
    env: NODE_ENV,
    corsOptions,
};