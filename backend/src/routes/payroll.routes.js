import express from "express";
import { generatePayroll, getPayroll } from "../controllers/payroll.controller.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

// Generate payroll
router.post("/generate", authMiddleware, generatePayroll);

// Get payrolls by employeeId
router.get("/:employeeId", authMiddleware, getPayroll);

export default router;
