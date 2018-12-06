const express = require("express");

const indexRoute = require("./routes/index.js");
const campsRoute = require("./routes/camps.js");

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
 
    next();
});

app.use("/api", indexRoute);
app.use("/api/camps", campsRoute);

app.listen(PORT, "0.0.0.0");