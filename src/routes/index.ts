import { userRoutes } from '@/routes/user.routes'
import express from 'express'

// Create main router
const apiRoutes = express.Router()

// Root route
apiRoutes.get('/', (_req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to the API',
    version: '1.0.0',
  })
})

// Mount routes
apiRoutes.use('/users', userRoutes)

export { apiRoutes }
