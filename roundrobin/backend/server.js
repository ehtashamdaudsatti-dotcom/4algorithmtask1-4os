require("dotenv").config();

const express = require("express");
const cors = require("cors");

const scheduler = require("./routes/scheduler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", scheduler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server Running on Port ${PORT}`);

});