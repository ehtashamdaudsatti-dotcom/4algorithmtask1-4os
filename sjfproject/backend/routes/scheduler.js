const express = require("express");

const router = express.Router();

router.post("/sjf", (req, res) => {

    const { processes } = req.body;

    const sortedProcesses = [...processes].sort(
        (a, b) => a.burst - b.burst
    );

    let currentTime = 0;

    const gantt = [];

    sortedProcesses.forEach(process => {

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