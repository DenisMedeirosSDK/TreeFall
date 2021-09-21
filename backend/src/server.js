require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const { user_mongo, password_mongo, collection_name_mongo } = process.env;

mongoose.connect(
  `mongodb+srv://${user_mongo}:${password_mongo}@cluster0.hr2tt.mongodb.net/${collection_name_mongo}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
