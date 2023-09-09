// src/app.ts

import express, { Application } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './Routes/user.routes';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

const mongoString = process.env.DATABASE_URL;

if (!mongoString) {
  console.error('DATABASE_URL is not defined in your environment variables.');
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoutes);

const PORT: number = 8070;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
