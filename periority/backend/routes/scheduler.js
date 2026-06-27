const express = require("express");

const router = express.Router();

router.post("/priority", (req, res) => {

    const { processes } = req.body;

    const sortedProcesses = [...processes].sort(
        (a, b) => a.priority - b.priority
    );

    let currentTime = 0;

    const gantt = [];

    sortedProcesses.forEach(process => {

        gantt.push({

            process: process.name,

            priority: process.priority,

            start: currentTime,

            end: currentTime + process.burst

        });

        currentTime += process.burst;

    });

    res.json(gantt);

});

module.exports = router;