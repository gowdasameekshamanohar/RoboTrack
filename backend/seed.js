const mongoose = require("mongoose");
require("dotenv").config();

const robotSchema = new mongoose.Schema({
    id: String,
    name: String,
    status: String,
    battery: Number
});

const Robot = mongoose.model("Robot", robotSchema);

const robots = [
    {
        id: "R001",
        name: "Warehouse Bot 01",
        status: "Active",
        battery: 85
    },
    {
        id: "R002",
        name: "Warehouse Bot 02",
        status: "Charging",
        battery: 42
    },
    {
        id: "R003",
        name: "Delivery Drone 01",
        status: "Offline",
        battery: 89
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB Atlas");

        await Robot.deleteMany({});
        await Robot.insertMany(robots);

        console.log("Robots inserted successfully!");

        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.error("Seeding failed:", error.message);
    }
}

seedDatabase();