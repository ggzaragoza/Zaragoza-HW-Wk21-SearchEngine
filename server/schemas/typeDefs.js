const { gql } = require('apollo-server-express');

const typeDefs = gql(`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
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
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    # users: [User]
    # user(username: String!): User
    me: User
    # savedBooks (username: String): [Book]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(input: savedBook!): User
    removeBook(bookId: String!): User
  }
`);

module.exports = typeDefs;
