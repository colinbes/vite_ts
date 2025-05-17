import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { config } from 'dotenv';
import { apiRoutes } from './routes';

// Load environment variables
config();

// Create Express app
const app = express();

// Configure CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Security middleware
app.use(helmet());

// Request logging
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// API routes
const apiPrefix = process.env.API_PREFIX || '/api/v1';
app.use(apiPrefix, apiRoutes);

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ 
    status: 'error', 
    message: `Cannot ${req.method} ${req.originalUrl}` 
  });
});

// Error handler
app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error.stack);
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    status: 'error',
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : error.stack
  });
});

export { app };