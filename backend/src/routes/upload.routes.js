import express from "express";
import multer from "multer";
import { uploadFile } from "../controllers/upload.controller.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/", authMiddleware, upload.single("file"), uploadFile);

export default router;
