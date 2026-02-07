# Basic Hotel Admin Platform - Assessment

This is my submission for the Senior Full-Stack Assessment. I've built a minimal but powerful internal hotel admin tool that helps staff manage hotels, room types, and those tricky seasonal rate adjustments with ease.

## Quick Start Guide

### Backend (FastAPI)
1. **Navigate to backend folder:** `cd backend`
2. **Setup virtual environment:** `python -m venv venv2` and activate it.
3. **Install dependencies:** `pip install -r requirements.txt`
4. **Run migrations:** `alembic upgrade head`
5. **Seed the database:** `python seed.py`
6. **Start the engine:** `uvicorn main:app --reload`

### Frontend (Next.js)
1. **Navigate to frontend folder:** `cd frontend`
2. **Install the goodies:** `npm install`
3. **Start the magic:** `npm run dev`
4. **Visit:** `http://localhost:3006`

---

## Tech Stack Used

- **The Brains (Backend):** FastAPI (Python) - super fast and easy to use!
- **The Face (Frontend):** Next.js (React) with some nice CSS touches.
- **The Memory (Database):** SQLite (perfect for this local assessment).
- **The Glue (ORM):** SQLAlchemy & Alembic for migrations.
- **The Gateman (Auth):** JWT (JSON Web Tokens).

---

## Assumptions & Decisions

1. **User Login:** Since we need staff login, I've seeded a default user:
   - **Username:** `admin`
   - **Password:** `admin123`
2. **Rate Adjustments:** I assumed that rate adjustments are "effective from" a specific date. The system automatically picks the **latest relevant adjustment** for the current date.
3. **Currency:** Everything is in Dollars ($) for now!

---

## Trade-offs Made

- **Local Storage:** I used SQLite to make it easy for you to run without setting up a huge PostgreSQL server.
- **Single Token:** I used a simple access token (JWT) without refresh tokens to keep the assessment scope manageable.
- **Styling:** I used Vanilla CSS/Next.js styles for maximum speed and simplicity.

---

## Assessment Requirements Check

- [x] Backend: FastAPI + SQLAlchemy + Alembic
- [x] Frontend: Next.js
- [x] Auth: JWT Login
- [x] CRUD: Hotel & Room Type management
- [x] Logic: `effective_rate = base_rate + adjustment`
- [x] Migrations: Initial + follow-up (status field added)
- [x] README: (You are reading it!)

Hope you like the work!
