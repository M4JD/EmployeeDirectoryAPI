import { Router } from "express";
import { addEmployee, deleteEmployee, getEmployee, getEmployees, updateEmployee } from "../controllers/employee-controller.js";
import { authMiddleware } from "../middleware/index.js";
const employeeRouter = Router();

employeeRouter.get("/", authMiddleware, getEmployees);
employeeRouter.get("/:id", authMiddleware, getEmployee);

employeeRouter.post("/", authMiddleware, addEmployee);
employeeRouter.put("/", authMiddleware, updateEmployee);
employeeRouter.delete("/", authMiddleware, deleteEmployee);

export default employeeRouter;