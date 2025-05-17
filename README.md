# TypeScript RESTful API with Vite and Vitest

A modern backend RESTful API project built with TypeScript, using Vite as the build tool and Vitest for testing.

## Features

- **TypeScript**: Fully typed codebase for better developer experience and code quality
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js
- **Vite**: Modern build tool for faster development and optimized production builds
- **Vitest**: Unit and integration testing framework
- **RESTful API**: Well-structured endpoints following REST principles
- **Middleware**: CORS, Helmet for security, and Morgan for logging
- **Error Handling**: Centralized error handling middleware
- **Environment Configuration**: Using dotenv for environment variables

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd myai

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

## Project Structure

```
myai/
├── src/                  # Source code
│   ├── controllers/      # Request handlers
│   ├── middleware/       # Express middleware
│   ├── routes/           # API routes
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   ├── app.ts            # Express app configuration
│   ├── app.test.ts       # API tests
│   └── index.ts          # Entry point
├── .env.example          # Example environment variables
├── .gitignore            # Git ignore file
├── package.json          # Project metadata and scripts
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run typecheck` - Type-check the project without emitting files

## Environment Variables

Copy `.env.example` to `.env` and adjust the values:

```
PORT=3000                 # Server port
NODE_ENV=development      # Environment (development, production, test)
CORS_ORIGIN=*             # CORS configuration
API_PREFIX=/api/v1        # API route prefix
LOG_LEVEL=debug           # Logging level
```

## API Endpoints

### Health Check
- `GET /health` - Server health check

### API Root
- `GET /api/v1` - Welcome message and API info

### Users
- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get user by ID
- `POST /api/v1/users` - Create a new user
- `PUT /api/v1/users/:id` - Update user by ID
- `DELETE /api/v1/users/:id` - Delete user by ID

## Testing

Tests are written using Vitest and Supertest for API testing:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch
```

## License

ISC