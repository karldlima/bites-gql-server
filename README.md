This is a personal project for a GraphQL server using Express.js that returns and adds food data for the [blissful-bites repo](https://github.com/karldlima/blissful-bites).

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

### Git

We use conventional commits. For more information you can check out the [Conventional Commit Homepage](https://www.conventionalcommits.org/en/v1.0.0/).

We follow a development branch naming convention: `<work type>/<issue-number>-<short-description>`

1. Start clasifying by work type. Examples: bugfix, feature, rebase, hotfix, docs, release, refactor.
2. Use dashes - to separate words.
3. Include related issue number (if any).
4. Describe the topic using two or three words.
