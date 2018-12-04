const express = require("express");
const indexRoute = require("./routes/index.js");
const campsRoute = require("./routes/camps.js");

const PORT = 3001;
const HOST = "0.0.0.0";

const app = express();

app.use("/api", indexRoute);
app.use("/api/camps", campsRoute);

app.listen(PORT, HOST);