const express = require("express");

var router = express.Router();

var knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: "postgres://postgres:258963147@db:5432/campgrounds"
});

router.get("/", function(req, res) {
	knex('camps').then(c => {
		res.send(c);
	});	
});
router.get("/:id", async function(req, res) {
	var data = await knex('camps').select();
	data = data.filter(camp => camp.id === req.params.id);
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