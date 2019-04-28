var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burger", function(req, res) {

    console.log(req.body.name)
    burger.insert([req.body.name], function(result) {
      res.status(200).end();
    });
  });
  
  router.put("/api/burger/:id", function(req, res) {
    var burgerID = req.params.id;
  
    console.log("condition", burgerID);
  
    burger.updateOne(
        burgerID,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;