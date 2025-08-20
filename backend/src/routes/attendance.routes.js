import express from "express";
import { markAttendance, getAttendance } from "../controllers/attendance.controller.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

// Mark attendance
router.post("/mark", authMiddleware, markAttendance);

// Get attendance records
router.get("/:employeeId", authMiddleware, getAttendance);

export default router;
