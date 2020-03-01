const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Collab = new Schema(
    {
        name: { type: String, required: true },
        skill: { type: [String], required: true },
        age: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('collab', Collab)