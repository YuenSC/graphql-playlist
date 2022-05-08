const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

// 1. Define an object type
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});
