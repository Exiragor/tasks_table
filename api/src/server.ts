import * as express from 'express'
import * as  express_graphql from 'express-graphql'
import { buildSchema } from 'graphql'
// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
const root = {
    message: () => 'Hello World!'
};

// Create an express server and a GraphQL endpoint
const app = express();
app.get('/', (_, res) => res.send("Welcome!"))
app.use('/api', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));