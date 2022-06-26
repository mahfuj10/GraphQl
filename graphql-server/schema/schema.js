const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLID, GraphQLSchema, GraphQLNonNull } = graphql;
const _ = require('lodash');
const Book = require('../models/Book');
const Author = require('../models/Author');
const Blog = require('../models/Blog');

// const allBlogs = [
//     {
//         name: "Our Trip to the Great Wall in China",
//         id: 22,
//         blogImg: "https://i.ibb.co/T040cRp/image-30-copyright.jpg",
//         date: '23/2/2022',
//         description: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus.",
//         writer: "Mahfujur rahman",
//         location: "Dhaka bangladesh",
//     },
//     {
//         name: "blog3",
//         id: 232,
//         blogImg: "https://i.ibb.co/T040cRp/image-30-copyright.jpg",
//         date: '23/2/2022',
//         description: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus.",
//         writer: "Mahfujur rahman",
//         location: "Dhaka bangladesh",
//     },
//     {
//         name: "Our Trip to the Great Wall in japan",
//         id: 222,
//         blogImg: "https://i.ibb.co/T040cRp/image-30-copyright.jpg",
//         date: '23/2/2022',
//         description: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus.",
//         writer: "Mahfujur rahman",
//         location: "Dhaka bangladesh",
//     },
// ]

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorId: { type: GraphQLID },
        author: {
            type: AuthorType,
            resolve(parent) {
                // return _.find(authors, { id: parent.authorId });
                return Author.findById(parent.authorId);
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        desc: { type: GraphQLString },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent) {
                // return _.filter(books, { authorId: parent.id })
                return Book.find({ authorId: parent.id });
            }
        }
    })
});

const BlogType = new GraphQLObjectType({
    name: "Blog",
    fields: () => ({
        name: { type: GraphQLString },
        loaction: { type: GraphQLString },
        writer: { type: GraphQLString },
        id: { type: GraphQLString },
        blogImg: { type: GraphQLString },
        date: { type: GraphQLString },
        description: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                // return _.find(books, { id: args.id })
                return Book.findById({ _id: args.id });
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // return _.find(authors, { id: args.id });
                return Author.findById({ _id: args.id });
            },
        },
        books: {
            type: new GraphQLList(BookType),
            resolve() {
                return Book.find({});
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve() {
                return Author.find({});
            }
        },
        blogs: {
            type: new GraphQLList(BlogType),
            resolve() {
                return Blog.find({});
            }
        },
        blog: {
            type: BlogType,
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return Blog.findOne({ id: args.id });
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLString },
                desc: { type: GraphQLString },
                // id: { type: GraphQLID },
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    desc: args.desc,
                });
                console.log(args);
                return author.save();
            }
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                id: { type: new GraphQLNonNull(GraphQLInt) },
                authorId: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    id: args.id,
                    authorId: args.authorId
                });
                return book.save();
            }
        },
        deleteBlog: {
            type: BlogType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent, args) {
                console.log(args);
                // return args.id;
                Book.findOneAndDelete({ _id: args.id })
                // Book.deleteOne({ id: args.id }).then(function () {
                //     console.log("Data deleted"); // Success
                // });
                return { id: args.id }
            }
        },
        addBlog: {
            type: BlogType,
            args: {
                name: { type: GraphQLString },
                loaction: { type: GraphQLString },
                writer: { type: GraphQLString },
                id: { type: GraphQLString },
                blogImg: { type: GraphQLString },
                date: { type: GraphQLString },
                description: { type: GraphQLString }
            },
            resolve(parent, args) {
                const blog = new Blog({
                    name: args.name,
                    loaction: args.loaction,
                    writer: args.writer,
                    id: args.id,
                    blogImg: args.blogImg,
                    date: args.date,
                    description: args.description
                });
                return blog.save();
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
