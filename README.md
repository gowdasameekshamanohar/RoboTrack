# RoboTrack

A web-based dashboard for monitoring and managing a fleet of robots.

RoboTrack is a full-stack robotics and software project designed to explore how robot fleet management systems can be built using modern web technologies, REST APIs, databases, and eventually real-time robot data.

---

## Current Status

**Stage:** React Dashboard UI + MongoDB-backed REST API

The backend server is running successfully and provides robot information through a REST API.

Robot data is stored in MongoDB and can be viewed through MongoDB Compass.

The React frontend has been initialized using Vite and currently contains the main RoboTrack dashboard layout and navigation interface.

The frontend and backend are currently being developed separately. The next major step is connecting the React dashboard to the backend API so that robot information is retrieved dynamically from MongoDB.

---

## Features

### Currently Implemented

- Node.js backend
- Express.js server
- REST API for robot data
- MongoDB database integration
- Mongoose data management
- MongoDB Compass for database management
- Simulated robot fleet data
- Robot status monitoring
- Battery level information
- Multiple robots/bots in the fleet
- React + Vite frontend
- RoboTrack dashboard interface
- Dashboard sidebar navigation
- Fleet command-center layout
- System online status indicator
- Lucide React icons
- Git and GitHub version control

### Planned Features

- Connect React frontend to backend API
- Display live MongoDB robot data in the dashboard
- Add new robots through the frontend
- Update robot information
- Remove robots
- Robot location tracking
- Fleet statistics and analytics
- Robot activity logs
- Real-time robot status updates
- Socket.IO integration
- Python-based robot simulation
- Responsive dashboard design
- Data visualization
- Integration with real robot/IoT data
- Deployment

---

## Dashboard

The current RoboTrack frontend provides a command-center style dashboard containing:

- Fleet Overview
- Dashboard navigation
- Robots section
- Analytics section
- Add Robot section
- Settings section
- System status indicator

The dashboard UI is currently a frontend prototype. Robot information will be connected to the backend API in the next development stage.

---

## Robot Fleet

The current robot fleet is simulated and stored in MongoDB.

Example robot data:

| Robot | Status | Battery |
| ----- | ------ | ------: |
| Robo-Alpha | Active | 85% |
| Robo-Beta | Charging | 40% |
| Robo-Gamma | Active | 72% |

> The actual robot data may change as robots are added or updated in the database.

---

## API

### Get All Robots

**Endpoint:**


GET /api/robots

This endpoint returns robot information from the backend.

Example response:

[
  {
    "name": "Robo-Alpha",
    "status": "Active",
    "battery": 85
  },
  {
    "name": "Robo-Beta",
    "status": "Charging",
    "battery": 40
  },
  {
    "name": "Robo-Gamma",
    "status": "Active",
    "battery": 72
  }
]

Additional API endpoints will be added as CRUD functionality is implemented.

Project Architecture

The current application follows a basic full-stack architecture:

                    RoboTrack
                        |
             ┌──────────┴──────────┐
             │                     │
        React Frontend        Express Backend
             │                     │
             │                REST API
             │                     │
             └──────────┬──────────┘
                        │
                     MongoDB
                        │
                 Robot Documents

The planned architecture will eventually include real-time communication and robot simulation:

                    RoboTrack
                        |
             ┌──────────┴──────────┐
             │                     │
        React Frontend        Node/Express API
             │                     │
             │                 MongoDB
             │                     │
             └──────────┬──────────┘
                        │
                    Socket.IO
                        │
                Robot Simulation
                        │
                  Python / IoT
                        │
                 Physical Robots
Project Structure
RoboTrack/
│
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── Dashboard.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore

The project structure will continue to evolve as new features are added.

Getting Started
Prerequisites

Make sure the following are installed:

Node.js
npm
MongoDB
MongoDB Compass
Git
1. Clone the repository
git clone <your-repository-url>
cd RoboTrack
2. Install backend dependencies
cd backend
npm install
3. Start the backend server
node server.js

The backend server runs on:

http://localhost:5000
4. Test the backend API

Open:

http://localhost:5000/api/robots

You should receive the robot fleet data as JSON.

5. Install frontend dependencies

Open a new terminal and navigate to the frontend:

cd frontend
npm install
6. Start the React frontend
npm run dev

Vite will provide a local development URL, usually:

http://localhost:5173

Open the URL in your browser to view the RoboTrack dashboard.

Technologies
Frontend
React
Vite
JavaScript
Lucide React
CSS
Backend
Node.js
Express.js
REST API
Database
MongoDB
Mongoose
MongoDB Compass
Development Tools
Visual Studio Code
Git
GitHub
npm
Planned Technologies
Socket.IO
Python
IoT / Robotics integration
Development Roadmap
 Initialize Git repository
 Set up GitHub repository
 Initialize Node.js backend
 Set up Express server
 Create robot API
 Add simulated robot data
 Add multiple robots to the fleet
 Connect backend to MongoDB
 Store robot data in MongoDB
 Initialize React frontend
 Set up Vite
 Create initial dashboard layout
 Add sidebar navigation
 Add dashboard command-center interface
 Add system status indicator
 Connect React frontend to backend API
 Display live MongoDB robot data in React
 Create reusable robot components
 Implement CRUD operations
 Add robot creation form
 Add robot editing
 Add robot deletion
 Add robot location tracking
 Add fleet statistics
 Add analytics and data visualization
 Add real-time communication with Socket.IO
 Add Python-based robot simulation
 Integrate real robot/IoT data
 Deploy RoboTrack
Project Goal

The goal of RoboTrack is to build a complete robot fleet management system capable of monitoring and managing multiple robots from a centralized dashboard.

The project is being developed progressively, starting with simulated robot data and a database-backed REST API before introducing CRUD operations, real-time communication, robot simulation, and eventually real robot/IoT data.

Learning Objectives

Through this project, I am learning and applying:

Full-stack web development
REST API development
Backend development with Node.js and Express
Frontend development with React
Component-based UI development
Database management with MongoDB
API integration
CRUD operations
Real-time communication
Git and GitHub workflows
System architecture
Dashboard development
Data visualization
Robotics and IoT concepts
Author

Gowda Sameeksha Manohar

BCA - Robotics, Artificial Intelligence, Virtual Reality

Srinivas University
