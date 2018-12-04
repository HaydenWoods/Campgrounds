const express = require("express");

var router = express.Router();

router.get("/", function(req, res){
	let data = {status: "success"}
	res.json(data);
});

router.post("/", function(req, res){
	let data = {status: "success"}
	res.json(data);
});

router.put("/", function(req, res){
	let data = {status: "success"}
	res.json(data);
});

router.delete("/", function(req, res){
	let data = {status: "success"}
	res.json(data);
});

module.exports = router