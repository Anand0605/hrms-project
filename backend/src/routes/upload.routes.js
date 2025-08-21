import express from "express";
import multer from "multer";
import { uploadFile } from "../controllers/upload.controller.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

// multer with memory storage so controller fs.writeFileSync(file.buffer) kaam karega
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", authMiddleware, upload.single("file"), uploadFile);

export default router;
