const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    id: Number,
    authorId: Number,
});

module.exports = mongoose.model('Book', bookSchema);