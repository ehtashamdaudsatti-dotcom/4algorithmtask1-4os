const express = require("express");

const router = express.Router();

router.post("/fcfs", (req, res) => {

    const { processes } = req.body;

    let currentTime = 0;

    const gantt = [];

    processes.forEach(process => {

        gantt.push({
            process: process.name,
            start: currentTime,
            end: currentTime + process.burst
        });

        currentTime += process.burst;

    });

    res.json(gantt);

});

module.exports = router;