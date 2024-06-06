import { buildSchema } from "graphql";

// queries, mutations
export const typeDefs = buildSchema(`
  type Food {
    id: Int!
    type: String!
    name: String!
    topping: String!
  }
  type Query {
    food: [Food]
  }
`);
