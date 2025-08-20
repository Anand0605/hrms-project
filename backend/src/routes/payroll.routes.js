import express from "express";
import { generatePayroll, getPayroll } from "../controllers/payroll.controller.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.post("/generate", authMiddleware, generatePayroll);
router.get("/:employeeId", authMiddleware, getPayroll);

export default router;
