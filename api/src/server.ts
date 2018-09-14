import * as express from 'express'
import * as  express_graphql from 'express-graphql'
import { buildSchema } from 'graphql'
import * as config from 'config'
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

const port = config.app.port || 4000
app.listen(port, () => console.log(`Express GraphQL Server Now Running On localhost:${port}/api`));