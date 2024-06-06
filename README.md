This is a personal project for a GraphQL server using Express.js that returns food.

## Getting Started

First, run the development server (using pnpm or your choice of package manager):

```bash
pnpm i
node index.js
```

## Testing the Server

You can test the server using the in-built GraphQL Apollo interface, Apollo introspection will allow you to add fields quickly to your query.

## Project Structure

```
.
├── graphql
│ ├── index.js # Entry point of the server, handler
│ ├── schema.js # GraphQL schema definitions
│ └── resolvers.js # Resolver functions for the GraphQL schema
├── package.json # Project metadata and dependencies
└── README.md # This README file
```
