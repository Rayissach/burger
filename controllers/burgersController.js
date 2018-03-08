var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req, res){
	//get all the data from burgers
burger.all(function(data){
	var brgObject = {
		burgers:data
	};
	console.log(brgObject);
	res.render("index", brgObject)
});
});

router.post("/api/burgers", function(req, res) {
	burger.create([
		"burger_name", "devoured"
		], [
		req.body.burger_name, req.body.devoured
		], function(result) {
			res.json({ id: result.insertId });
		});
});

router.put("/api/burgers/:id", function(req, res) {
	var condition = "id= " + req.params.id;

	console.log("condition" + condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
});
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
