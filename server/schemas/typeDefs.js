const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    games: [Game]
  }

  type Game {
    _id: ID
    gameName: String
    gameImg: String
    # comments: [Comment]!
  }

  # type Comment {
  #   _id: ID
  #   commentText: String
  #   commentAuthor: String
  #   createdAt: String
  # }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user: User
    games(username: String): [Game]
    game(username: String): Game
  
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addGame(gameText: String!): Game
    # addComment(gamesId: ID!, commentText: String!): Game
    removeGame(gameId: ID!): Game
    # removeComment(thoughtId: ID!, commentId: ID!): Game
  }
`;

module.exports = typeDefs;
