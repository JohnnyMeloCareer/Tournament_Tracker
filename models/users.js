const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    // Define the Schema of the user
    email: { type: String},
    username: { type: String, require: true },
    password: { type: Number},
    date_of_join: { type: Date, default: Date.now }
    
})

const users = mongoose.model("users", usersSchema);

module.exports = users;