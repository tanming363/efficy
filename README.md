# Apsis Steps Leaderboard API

## Overview

This is a REST API for a company-wide steps leaderboard application. Teams of employees can track their step counts, compare totals, and manage team members. The application provides endpoints for creating, updating, and retrieving step counters for teams.

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Build the project:

   ```bash
   npm run build
   ```

3. Start the server:

   ```bash
   npm start
   ```

   For development mode with hot-reloading:

   ```bash
   npm run start:dev
   ```

4. Access the Swagger API docs at:

   ```
   http://localhost:3000/api-docs
   ```

## API Endpoints

### Teams

By default, the server will run on http://localhost:3000.

- **POST** `/api/teams`: Create a new team.
- **GET** `/api/teams`: Get a list of all teams.
- **GET** `/api/teams/:id/steps`: Get total steps for a team.
- **DELETE** `/api/teams/:id`: Delete a team.

### Counters

- **POST** `/api/counters`: Create a new counter for a team member.
- **POST** `/api/counters/:id/increment`: Increment a counter for a team member.
- **GET** `/api/counters/:teamId/counters`: Get counters for all members in a team.
