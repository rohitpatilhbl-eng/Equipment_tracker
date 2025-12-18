# Equipment Tracker Application

This project is a simple full-stack web application developed as part of a take-home assignment.  
The main objective of this application is to manage a list of equipment and demonstrate basic understanding of frontend, backend, and REST API concepts.

The focus of this project is functionality, clean code, and clear separation between frontend and backend.

---

## Features

The application provides the following functionality:

- View a list of equipment in a table format
- Add new equipment
- Edit existing equipment
- Delete equipment

Each equipment record includes:
- Name
- Type (Machine, Vessel, Tank, Mixer)
- Status (Active, Inactive, Under Maintenance)
- Last Cleaned Date

---

## Tech Stack

### Frontend
- React
- HTML, CSS, JavaScript

### Backend
- Node.js
- Express.js

### Data Storage
- JSON file (used instead of a database to keep the setup simple)

---

## API Endpoints

The backend exposes the following REST APIs:

- **GET `/api/equipment`**  
  Retrieves all equipment records

- **POST `/api/equipment`**  
  Adds a new equipment record

- **PUT `/api/equipment/:id`**  
  Updates an existing equipment record

- **DELETE `/api/equipment/:id`**  
  Deletes an equipment record

---

## Project Structure

backend/
- routes/
- data/
- index.js
- package.json

frontend/
- public/
- src/
  - api/
  - components/
  - pages/
  - App.js
- package.json



---

## How to Run the Project Locally

### Backend Setup

```bash
cd backend
npm install
node server.js


The backend server will start at:
http://localhost:5000


```

### Frontend Setup

```bash

cd frontend
npm install
npm start

The frontend application will start at:
http://localhost:3000


Make sure both the frontend and backend are running at the same time.
```

## Assumptions & Design Decisions

- Authentication and user management were intentionally excluded, as they were not part of the assignment scope.
- Equipment data is stored in a local JSON file to keep the setup lightweight and focused on core CRUD functionality.
- Basic client-side validation is implemented to ensure required fields are provided.
- The user interface prioritizes clarity and usability over advanced styling.
- The application is designed for local development and demonstration purposes.

---

## Possible Improvements

- Migrate data storage from a JSON file to a database such as PostgreSQL or MongoDB.
- Add search, filter, and sorting capabilities to improve usability for larger datasets.
- Enhance UI styling and ensure full mobile responsiveness.
- Implement more robust error handling and validation.
- Add unit tests for both frontend and backend components.

