import ApiStatusesEnum from "../enums/api-statuses.enum.js";
import Employee from "../models/employee-model.js";
import { addEmployeeToCache, deleteCachedEmployee, getCachedEmployeeById, getCachedEmployees, updateCachedEmployee } from "../services/employee-service.js";
import Logger from "../utils/logger.js";
import { buildSuccessResponse } from "./response-handler.js";
const logger = new Logger('employee-controller');

const getEmployees = async (req, res) => {
    const employeeCache = getCachedEmployees();
    return buildSuccessResponse(res, employeeCache);
};

const getEmployee = async (req, res) => {
    const employeeId = req.params.id;
    const employee = getCachedEmployeeById(employeeId);
    return buildSuccessResponse(res, employee);
};

const addEmployee = async (req, res) => {
    // req.body.
    const newEmployee = new Employee();
    const status = addEmployeeToCache(newEmployee);
    if (!status)
        return buildSuccessResponse(res, {}, ApiStatusesEnum.noContent);
    else
        return buildSuccessResponse(res, newEmployee, ApiStatusesEnum.created);
};

const updateEmployee = async (req, res) => {
    updateCachedEmployee
};
const deleteEmployee = async (req, res) => {
    deleteCachedEmployee
};

export {
    getEmployee,
    getEmployees,
    addEmployee,
    updateEmployee,
    deleteEmployee
};