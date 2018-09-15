import * as express from 'express'
import * as  express_graphql from 'express-graphql'
import { buildSchema } from 'graphql'
import * as config from 'config'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import * as path from 'path'
import rootResolver from './resolvers'

const app = express();
const typeDefs  = importSchema(path.join(__dirname + '/types/schema.graphql'))
const schema = makeExecutableSchema({ typeDefs })

app.get('/', (_, res) => res.send("Welcome!"))
app.use('/api', express_graphql({
    schema: schema,
    rootValue: rootResolver,
    graphiql: true
}));

const port = config.app.port || 4000
app.listen(port, () => console.log(`Express GraphQL Server Now Running On localhost:${port}/api`));