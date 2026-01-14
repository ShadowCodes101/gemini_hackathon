# Lanyard – Development Priorities

This document outlines the implementation priorities for Lanyard, split into Backend, Database, Frontend, and AI Integration.
The order reflects MVP-first execution, optimized for the Devpost Gemini Hackathon.

## 🛠 Backend Priorities (Express.js)
### 🔴 P0 – Core Infrastructure (Must-Have)
#### Authentication & Authorization

 User registration (POST /api/v1/auth/register)

 User login (POST /api/v1/auth/login)

 JWT-based authentication middleware

 Refresh token flow

 Get current user (GET /api/v1/auth/current-user)

 Global role handling (admin, member)

#### Project Management

 Create project (POST /api/v1/projects) – Admin only

 List user projects (GET /api/v1/projects)

 Get project details (GET /api/v1/projects/:projectId)

 Add project members (POST /api/v1/projects/:projectId/members)

 Project-level role enforcement (project_admin, member)

#### Tasks & Subtasks

 Create task (POST /api/v1/tasks/:projectId)

 List project tasks (GET /api/v1/tasks/:projectId)

 Update task status & metadata

 Create subtasks

 Update subtask status (members allowed)

 Enforce task → project relationship

### 🟡 P1 – Execution Context
#### Notes System

 Create project notes (Admin only)

 List project notes

 Update / delete notes

 Markdown support

#### System Utilities

 Healthcheck endpoint (GET /api/v1/healthcheck)

 Centralized error handling

 Input validation

### 🟢 P2 – Enhancements (Stretch)

 #### File uploads for tasks

 #### Attachment metadata storage

 #### Rate limiting & logging

## 🗄 Database Priorities (PostgreSQL)
### 🔴 P0 – Core Schema
#### Users

 users table with unique email constraint

 Password hashing (no plaintext storage)

 Global role enum (admin, member)

#### Projects & Members

 projects table

 project_members join table

 Unique constraint on (project_id, user_id)

 Project-level roles (project_admin, member)

#### Tasks & Subtasks

 tasks table linked to projects

 Task status enum (todo, in_progress, done)

 Optional assignee reference

 subtasks table linked to tasks

 Cascade deletes (task → subtasks)

### 🟡 P1 – Contextual Data
Notes

 notes table scoped to projects

 Author tracking (created_by)

 Timestamping for AI analysis

### 🟢 P2 – Performance & Metadata

 Indexes on project_id, assignee_id

 Optional AI insights table (JSON payloads)

## 🎨 Frontend Priorities (Next.js)
### 🔴 P0 – Core UX
#### Authentication

 Login & registration pages

 Auth state persistence

 Protected routes

#### Global Dashboard

 Project cards

 Completion percentage

 AI risk indicator

 “My Tasks” view

#### Project Workspace

 Project overview tab

 Tasks view (Kanban / List)

 Members view (Admin only)

### 🟡 P1 – Execution Clarity

 Task detail view

 Inline editing

 Subtask progress indicators

 Notes editor (Markdown)

### 🟢 P2 – Polish

 Drag-and-drop Kanban

 Animations & transitions

 File previews

## 🤖 AI Integration Priorities (Gemini)
### 🔴 P0 – Core Differentiators
#### Task Intelligence

 Task breakdown (POST /api/v1/ai/tasks/breakdown)

 Generate goal, definition of done, subtasks

 Auto-insert AI-generated subtasks

#### Execution Risk Engine

 Project risk scoring (GET /api/v1/ai/projects/:projectId/risk)

 Risk level + numeric score

 Human-readable explanations

 Dashboard integration

### 🟡 P1 – Insights & Summaries

 Project execution summary

 Notes summarization

 Action item extraction

### 🟢 P2 – Advanced Intelligence

 Assignee suggestion

 Workload analysis

 Project postmortem generation

## 🧠 Guiding Principles

Backend enforces RBAC, frontend only reflects it

Database stores facts, backend applies rules

AI reads context, never mutates blindly

Execution health > task tracking

# 🏁 MVP Definition
 
A successful MVP includes:

Auth + RBAC

Projects with members

Tasks with subtasks

AI task breakdown

AI execution risk indicator

Dashboard showing execution health

Lanyard doesn’t help teams track work.
It helps teams finish projects.﻿

﻿
