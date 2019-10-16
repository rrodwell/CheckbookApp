const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

//Allow cross-origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema, //Defining graphql graph and object types on that graph
  graphiql: true
}));

app.listen(4000,() => {
  console.log('Listening on port 4000...');
});
