import { ApolloServer, gql } from "apollo-server-express";
import express from "express";

// 構造定義
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// resolver定義
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
