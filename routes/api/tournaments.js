const router = require("express").Router;
const tournamentsController = require("../../controllers/tournamentsController");

router.route("/tournaments")
.get(tournamentsController.findAll)
.post(tournamentsController.create);


module.exports = router;
