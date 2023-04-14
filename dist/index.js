"use strict";
const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
app.use("/api", require("./api/status"));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
