const mongoose = require("mongoose")

const Schema = mongoose.Schema

const wordsSchema = new Schema({
    word: { type: String, required: true },
    defintion: [{ type: String }],
    phonicWords: [{ type: mongoose.Types.ObjectId, required: true, ref: "Words" }]

})

