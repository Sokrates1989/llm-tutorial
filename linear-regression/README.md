# 🚀 Full-Stack Docker App — Frontend, Backend & Redis

A simple full-stack template with React frontend, FastAPI backend, and Redis cache. All components are fully dockerized for fast local setup and consistent development environments.

## Table of Contents

1. [📖 Overview](#-overview)  
2. [🧑‍💻 Usage](#-usage)  
3. [🛠️ Setup & Configuration](#-setup--configuration)  
4. [📦 Architecture](#-architecture)  
5. [🚀 Summary](#-summary)

<br>
<br>

# 📖 Overview

This repository provides a minimal but complete boilerplate for a full-stack web application consisting of:

- **React Frontend** (Vite)
- **FastAPI Backend** (Python)
- **Redis Cache**  
All services are orchestrated via Docker Compose.

The stack is ready for local development and quick prototyping.

<br>
<br>

# 🧑‍💻 Usage

You can run the entire stack (frontend + backend + Redis) with a single command:

```bash
docker compose up --build
```

After the build completes:

- **Frontend**: [http://localhost:<FRONTEND_PORT>](http://localhost:<FRONTEND_PORT>)  
- **Backend**: [http://localhost:<BACKEND_PORT>](http://localhost:<BACKEND_PORT>)  
- **Test API Endpoint**: [http://localhost:<BACKEND_PORT>/test](http://localhost:<BACKEND_PORT>/test)  

> Ports for both frontend and backend are configured in the root `.env` file.

<br>
<br>

# 🛠️ Setup & Configuration

Before running the stack, you must configure environment variables.

### 🔧 Environment Setup

Copy the provided `.env.template` files to `.env` for all 3 parts of the app:

```bash
cp .env.template .env
cp backend/.env.template backend/.env 
cp frontend/.env.template frontend/.env
```

You may adapt the values in each `.env` file to fit your local environment (e.g. ports, Redis host, etc).

> ℹ️ The frontend and backend ports are both defined in your root `.env` file as `FRONTEND_PORT` and `BACKEND_PORT`.

<br>

# 📦 Architecture

```txt
.
├── backend/         # FastAPI backend service
│   └── .env         # Backend config
├── frontend/        # React frontend (Vite)
│   └── .env         # Frontend config
├── redis/           # Redis container (if configured)
├── .env             # Root config (defines FRONTEND_PORT, BACKEND_PORT, etc.)
├── docker-compose.yml
└── README.md
```

<br>
<br>

# 🚀 Summary

✅ Simple one-command full stack startup  
✅ FastAPI + React + Redis  
✅ Uses `.env.template` files to bootstrap config  
✅ Fully dockerized for platform-agnostic dev  
✅ Frontend and backend ports defined centrally in `.env`  
