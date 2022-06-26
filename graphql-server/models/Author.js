const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    id: Number,
    desc: String
});

module.exports = mongoose.model('Author', authorSchema);