const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

// ======================================  CORS

app.use(cors());
// ======================================  Mongodb

mongoose.connect(process.env.MONGODB_URI || url);
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

app.listen(PORT, () => {
  console.log(`now listening on port ${PORT}`);
});
