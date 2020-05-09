import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/graphql', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once('open', () => {
  console.log('connected to database');
})