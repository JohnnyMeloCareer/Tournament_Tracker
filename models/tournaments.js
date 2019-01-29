const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentsSchema = newSchema({
    // Define the Schema of the tournament
    _id: { type: Schema.Types.Objectid, require: true },
    tournament_name: { type: String, require: true },
    team_name: { type: String},
    total_user: { type: Integer},
    date: { type: Date, default: Date.now }
    }; 
})

const tournaments = Mongoose.model("tournaments", tournamentsSchema);

module.exports = tournaments;