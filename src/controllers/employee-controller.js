import { getCachedEmployees } from "../services/employee-service.js";
import Logger from "../utils/logger.js";
import { buildErrorResponse, buildSuccessResponse } from "./response-handler.js";
const logger = new Logger('employee-controller');
const getEmployees = async (req, res) => {
    return res.json({});
};
const getEmployee = async (req, res) => {
    try {
        const employeeCache = getCachedEmployees();
        const response = buildSuccessResponse(employeeCache, 200);
        return res.json(response);
    } catch (e) {
        const response = buildErrorResponse(e);
        return res.json(response);
    }
};
const addEmployee = async (req, res) => { };
const updateEmployee = async (req, res) => { };
const deleteEmployee = async (req, res) => { };

export {
    getEmployee,
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee
};