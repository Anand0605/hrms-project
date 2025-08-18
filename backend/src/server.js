import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import app from './src/app.js';
import connectDB from './src/config/db.js';

const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB();
  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`API running on http://0.0.0.0:${PORT}`);
  });
};

start();