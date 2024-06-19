import db from "../pgAdaptor.js";

export const resolvers = {
  Query: {
    food: async () => {
      return db
        .query(`SELECT * FROM food`)
        .then((res) => res)
        .catch((err) => {
          console.log("err: ", err);
          return err;
        });
    },
  },
  Mutation: {
    addFood: async (_, args) => {
      const query = `INSERT INTO food(id, type, name, topping, added)
        VALUES ($1, $2, $3, $4, $5) RETURNING name`;
      const values = [args.id, args.type, args.name, args.topping, new Date()];

      return db
        .one(query, values)
        .then((res) => {
          return res.name;
        })
        .catch((err) => {
          console.log("err: ", err);
          return err;
        });
    },
  },
};
