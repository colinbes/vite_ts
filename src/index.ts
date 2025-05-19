import { app } from './app'

// Get port from environment variables or use default
const PORT = process.env.PORT || 3000

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...')
  console.error(err.name, err.message)

  server.close(() => {
    process.exit(1)
  })
})

// Handle SIGTERM signal
process.on('SIGTERM', () => {
  console.log('SIGTERM RECEIVED. Shutting down gracefully')

  server.close(() => {
    console.log('Process terminated!')
  })
})
