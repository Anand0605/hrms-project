import express from "express";
import {
  applyLeave,
  getLeaves,
  approveLeave,
} from "../controllers/leave.controller.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

// Employee applies for leave
router.post("/apply", authMiddleware, applyLeave);

// Get all leaves of an employee
router.get("/:employeeId", authMiddleware, getLeaves);

// Admin approves/rejects leave
router.put("/approve/:id", authMiddleware, approveLeave);

export default router;
