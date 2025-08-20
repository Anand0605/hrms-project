import express from "express";
import { applyLeave, getLeaves, approveLeave } from "../controllers/leave.controller.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

router.post("/apply", authMiddleware, applyLeave);
router.get("/:employeeId", authMiddleware, getLeaves);
router.put("/approve/:id", authMiddleware, approveLeave);

export default router;
