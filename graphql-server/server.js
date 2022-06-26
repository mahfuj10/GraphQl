const express = require('express');
const port = 5000;
const app = express();
const schema = require('./schema/schema');
const expressGraphQl = require('express-graphql').graphqlHTTP;
const mongoose = require('mongoose');
const Book = require('./models/Book');
const Author = require('./models/Author');
require('dotenv').config();
const cors = require('cors');
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.39aol.mongodb.net/?retryWrites=true&w=majority`);
// graphql-application
// m02koZyQewg2gcnf
mongoose.connection.once('open', () => {
    console.log('mongodb connected...');
});

app.use('/graphql', expressGraphQl({
    schema: schema,
    graphiql: true
}));

app.get('/', (req, res) => {
    res.send('graphql server is running');
})

app.get('/authors', (req, res) => {
    Author.find({}, (err, data) => {
        res.send(data)
    })
});

app.get('/books', (req, res) => {
    Book.find({}, (err, data) => {
        res.send(data)
    })
});

app.listen(port, () => {
    console.log('graphql server is running');
})