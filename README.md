# Robot Fleet Dashboard

A web-based dashboard for monitoring and managing a fleet of robots.

This project is being developed as a robotics + software application to explore how robot fleet management systems can be built using web technologies, APIs, and eventually real-time robot data.

## Current Status

**Stage:** Backend API working with simulated robot data

The backend server is currently running successfully and provides robot information through a REST API.

## Features

### Currently Implemented

* Node.js backend
* Express.js server
* REST API for robot data
* Simulated robot fleet data
* Robot status monitoring
* Battery level information
* Multiple robots/bots in the fleet
* Git and GitHub version control

### Planned Features

* React-based dashboard
* MongoDB database integration
* Add, update, and remove robots
* Real-time robot status updates
* Robot location tracking
* Fleet statistics and analytics
* Robot activity logs
* Python-based robot simulation
* Socket.IO for real-time communication
* Improved UI and dashboard visualizations

## Current Robot Fleet

| ID   | Robot             | Status   | Battery |
| ---- | ----------------- | -------- | ------: |
| R001 | Warehouse Bot 01  | Active   |     85% |
| R002 | Warehouse Bot 02  | Charging |     42% |
| R003 | Delivery Drone 01 | Offline  |     89% |

The robot data is currently simulated and is not connected to physical robots.

## API

### Get all robots

**Endpoint:**

`GET /api/robots`

**Example response:**

```json
[
  {
    "id": "R001",
    "name": "Warehouse Bot 01",
    "status": "Active",
    "battery": 85
  },
  {
    "id": "R002",
    "name": "Warehouse Bot 02",
    "status": "Charging",
    "battery": 42
  },
  {
    "id": "R003",
    "name": "Delivery Drone 01",
    "status": "Offline",
    "battery": 89
  }
]
```

## Project Structure

```text
robot-fleet-dashboard/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── frontend/
│   └── ...
│
├── README.md
└── .gitignore
```

> The project structure will evolve as the frontend, database, and real-time communication layers are added.

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd robot-fleet-dashboard
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Start the backend server

```bash
node server.js
```

The server should start on:

```text
http://localhost:5000
```

### 4. Test the API

Open the following endpoint in your browser or API testing tool:

```text
http://localhost:5000/api/robots
```

You should receive the simulated robot fleet data as JSON.

## Technologies

### Current

* Node.js
* Express.js
* JavaScript
* REST API
* Git
* GitHub

### Planned

* React.js
* MongoDB
* Mongoose
* Socket.IO
* Python
* IoT / Robotics integration

## Project Goal

The goal of this project is to build a complete robot fleet management system that can monitor multiple robots from a centralized dashboard.

The project will gradually evolve from simulated data into a system capable of handling dynamic and real-time robot information.

## Learning Objectives

Through this project, I am learning and applying:

* Full-stack web development
* REST API development
* Backend development with Node.js and Express
* Frontend development with React
* Database management with MongoDB
* Real-time communication
* Git and GitHub workflows
* Robotics and IoT concepts
* System architecture and API integration

## Development Roadmap

* [x] Initialize Git repository
* [x] Set up GitHub repository
* [x] Initialize Node.js backend
* [x] Set up Express server
* [x] Create robot API
* [x] Add simulated robot data
* [x] Add third robot to the fleet
* [ ] Build React frontend
* [ ] Connect frontend to backend API
* [ ] Add MongoDB
* [ ] Implement CRUD operations
* [ ] Add real-time communication
* [ ] Add robot simulation
* [ ] Add fleet analytics
* [ ] Improve dashboard UI
* [ ] Integrate real robot/IoT data

## Author

**Gowda Sameeksha Manohar**
BCA - Robotics, Artificial Intelligence, Virtual Reality
Srinivas University
