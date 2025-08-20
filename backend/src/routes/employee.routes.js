import express from "express";
import { addEmployee, getEmployees, updateEmployee, deleteEmployee } from "../controllers/employee.controller.js";
import authMiddleware from "./../middlewares/auth.js";


const router = express.Router();

router.post("/", authMiddleware, addEmployee);
router.get("/", authMiddleware, getEmployees);
router.put("/:id", authMiddleware, updateEmployee);
router.delete("/:id", authMiddleware, deleteEmployee);

export default router;
