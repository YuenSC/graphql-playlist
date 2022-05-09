const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

const username = "yuensc07";
const password = encodeURIComponent("be9zSYKeFFSv#m9");
const url = `mongodb+srv://${username}:${password}@cluster0.tudx4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(url);
mongoose.connection
  .once("open", () => {
    console.log("connected to database");
  })
  .on("error", (error) => {
    console.log(error.message);
  });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("now listening on port 4000");
});
