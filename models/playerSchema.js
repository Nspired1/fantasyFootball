const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {
                type: String,
                required: "Last name is required"
            },
    position: {type: String},
    team: {type: String},
    number: {type: Number},
    touchdowns: {type: Number},
    rushYards: {type: Number},
    passYards: {type: Number},
    receivingYards: {type: Number},
    receptions: {type: Number},
    completions: {type: Number},
    rushAttempts: {type: Number},
    passAttempts: {type: Number},
    created_date: {
        type: Date,
        default: Date.now
    }
});

//name of model and schema
const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
