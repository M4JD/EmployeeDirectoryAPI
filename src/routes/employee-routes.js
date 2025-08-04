import { Router } from "express";
import { addEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from "../controllers/employee-controller.js";
import { authMiddleware } from "../middleware/index.js";
const employeeRouter = Router();

employeeRouter.get("/employees", authMiddleware, getEmployees);
employeeRouter.get("/", authMiddleware, getEmployee);

employeeRouter.post("/", authMiddleware, addEmployee);
employeeRouter.put("/", authMiddleware, updateEmployee);
employeeRouter.delete("/", authMiddleware, deleteEmployee);

export default employeeRouter;