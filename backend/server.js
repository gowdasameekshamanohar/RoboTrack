const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Robot Fleet API is running!");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/api/robots", (req, res) => {
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

    res.json(robots);
});