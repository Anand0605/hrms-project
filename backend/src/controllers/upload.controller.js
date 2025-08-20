// src/controllers/upload.controller.js
import path from 'path';
import fs from 'fs';

// Example: file upload function
export const uploadFile = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Optional: save file info somewhere
    const file = req.file;
    const filePath = path.join('uploads', file.originalname);

    // Create uploads folder if not exists
    if (!fs.existsSync('uploads')) {
      fs.mkdirSync('uploads');
    }

    // Move file from memory (Multer memory storage) to uploads folder
    fs.writeFileSync(filePath, file.buffer);

    res.status(200).json({
      message: 'File uploaded successfully',
      filename: file.originalname,
      path: filePath
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};
