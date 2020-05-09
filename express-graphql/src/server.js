import express  from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema.js';
import './config/db';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))
app.listen(4000, () => {
  console.log('Server is running on port 4000')
})