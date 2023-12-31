const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers} = require('./schemas')
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4')
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})
// app.use(routes);

db.once('open',  async () => {

  await apolloServer.start()

 app.use('/graphql', expressMiddleware(apolloServer, {
  // context: async ({req }) => console.log(req.headers.token)
 }))

 console.log(`GraphQL Playground found at http://localhost:${PORT}/graphql`)


  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
