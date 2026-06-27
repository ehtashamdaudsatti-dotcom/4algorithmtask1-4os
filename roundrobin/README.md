# Round Robin Scheduling Algorithm

## Project Overview

This project is a **Round Robin Scheduling Simulator** developed using **Node.js, Express.js, HTML, CSS, and JavaScript**. It demonstrates how the Round Robin CPU Scheduling Algorithm works by accepting process information and a time quantum from the user, then generating the execution order as a Gantt Chart.

## Features

* User-friendly interface
* Enter multiple processes with burst times
* Set custom time quantum
* Round Robin scheduling simulation
* Displays Gantt Chart
* Backend API built with Node.js and Express

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Node.js
* Express.js

## Project Structure

```
backend/
├── routes/
│   └── scheduler.js
├── server.js
├── package.json

frontend/
├── index.html
├── style.css
└── script.js
```

## How to Run

### Backend

```bash
cd backend
npm install
node server.js
```

### Frontend

Open the `frontend` folder and run `index.html` using Live Server.

## Input Format

```
P1,5
P2,3
P3,7
```

Time Quantum Example:

```
2
```

## Output

The application displays the execution sequence in the form of a **Gantt Chart** based on the Round Robin Scheduling Algorithm.

## Author

**Ehtasham Daud Satti**
new css addition

