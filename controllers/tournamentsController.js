const db = require("../models");


module.exports = {
    // what calls to update the data
    findAll: function(req, res){
        db.tournaments
        .find(req.query)
        .then(dbTournaments => res.json(dbTournaments))
        .catch(err => res.status(422).json(err));
    }
}