const db = require("../models");

module.exports = {
  // what calls to update the data
  findAll: function(req, res) {
    db.tournaments
      .find(req.query)
      .then(dbTournaments => res.json(dbTournaments))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const tournament = {
      tournament_name: req.body.tournament_name,
      team_name: req.body.team_name,
      total_users: req.body.total_users
    };
    db.tournaments
      .create(tournament)
      .then(dbtournament => res.json(dbtournament))
      .catch(err => res.status(422).json(err));
}
//  ,
//   update: function(req, res) {
//     const tournament = {};
//   }
};
