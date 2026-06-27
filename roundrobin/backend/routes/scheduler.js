const express = require("express");

const router = express.Router();

router.post("/roundrobin", (req, res) => {

    const { processes, quantum } = req.body;

    const queue = processes.map(p => ({ ...p }));

    let currentTime = 0;

    const gantt = [];

    while (queue.length > 0) {

        const process = queue.shift();

        const execution = Math.min(process.remaining, quantum);

        gantt.push({

            process: process.name,

            start: currentTime,

            end: currentTime + execution

        });

        currentTime += execution;

        process.remaining -= execution;

        if (process.remaining > 0) {

            queue.push(process);

        }

    }

    res.json(gantt);

});

module.exports = router;


