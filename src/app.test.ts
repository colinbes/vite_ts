import { describe, it, expect } from 'vitest';
import supertest from 'supertest';
import { app } from './app';

const request = supertest(app);

describe('API Endpoints', () => {
  describe('Health Check', () => {
    it('should return 200 and status ok on /health endpoint', async () => {
      const response = await request.get('/health');
      
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        status: 'ok',
        message: 'Server is running'
      });
    });
  });

  describe('API Routes', () => {
    it('should return welcome message on API root', async () => {
      const apiPrefix = process.env.API_PREFIX || '/api/v1';
      const response = await request.get(apiPrefix);
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'success');
      expect(response.body).toHaveProperty('message', 'Welcome to the API');
      expect(response.body).toHaveProperty('version');
    });

    it('should fetch mock users successfully', async () => {
      const apiPrefix = process.env.API_PREFIX || '/api/v1';
      const response = await request.get(`${apiPrefix}/users`);
      
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'success');
      expect(response.body).toHaveProperty('data.users');
      expect(Array.isArray(response.body.data.users)).toBe(true);
    });
  });

  describe('Error Handling', () => {
    it('should return 404 for non-existent routes', async () => {
      const response = await request.get('/non-existent-route');
      
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('status', 'error');
      expect(response.body).toHaveProperty('message');
    });
  });
});