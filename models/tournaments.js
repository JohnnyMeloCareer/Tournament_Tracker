const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentsSchema = new Schema({
    // Define the Schema of the tournament
    tournament_name: { type: String, require: true },
    team_name: { type: String},
    total_user: { type: Number},
    date: { type: Date, default: Date.now }
    
})

const tournaments = mongoose.model("tournaments", tournamentsSchema);

module.exports = tournaments;