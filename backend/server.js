const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const PORT = 5000;

// Robot schema
const robotSchema = new mongoose.Schema({
    id: String,
    name: String,
    status: String,
    battery: Number
});

// Robot model
const Robot = mongoose.model("Robot", robotSchema);

// Home route
app.get("/", (req, res) => {
    res.send("RoboTrack API is running!");
});

// Get all robots
app.get("/api/robots", async (req, res) => {
    try {
        const robots = await Robot.find();
        res.json(robots);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB Atlas");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });