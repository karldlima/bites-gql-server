import { buildSchema } from "graphql";

// queries, mutations
export const typeDefs = buildSchema(`
  type Food {
    id: Int!
    type: String!
    name: String!
    topping: String!
    added: String!
  }
  type Query {
    food: [Food]
  }
  type Mutation {
    addFood(id: Int!, type: String!, name: String!, topping: String!, added: String!): String
  }
`);
