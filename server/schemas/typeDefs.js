const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String
    bookCount: Int
    savedBooks: {
      _id
      bookId
      authors
      description
      title
      image
      link
    }
  }

  type Book {
    _id: ID
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  input savedBook {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    // books(username: String): [Thought]
    // book(thoughtId: ID!): Thought
    me: User
    savedBooks (username: String): [Book]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookId: String!, title: String!): Book
    removeBook(bookId: String!): Book
  }
`;

module.exports = typeDefs;
