const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    bookId: String
    authors: String
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
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    // addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    // addComment(
    //   thoughtId: ID!
    //   commentText: String!
    //   commentAuthor: String!
    // ): Thought
    // removeThought(thoughtId: ID!): Thought
    // removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
