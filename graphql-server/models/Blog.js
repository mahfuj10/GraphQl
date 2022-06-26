const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    name: String,
    loaction: String,
    writer: String,
    id: String,
    blogImg: String,
    date: String,
    description: String,


});

module.exports = mongoose.model('Blog', blogSchema);