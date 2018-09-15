import * as express from 'express'
import * as  express_graphql from 'express-graphql'
import { buildSchema } from 'graphql'
import * as config from 'config'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import * as path from 'path'
// GraphQL schema
const schema = buildSchema(`
    type Query {
        tasks: [Task!]!
        users: [User!]!
    }
  
    type Mutation {
        deleteTask(id: ID!): Task!
        deleteUser(id: ID!): User!
    }
    
    type Task {
        id: ID!
        title: String!
        text: String!
    }
    
    type User {
        id: ID!
        login: String!
    }
`);
let users = [{id: 1, login: 'Test 1'}, {id: 2, login: 'Test 2'}, {id: 3, login: 'Test 3'}]
let tasks = [{id: 1, title: 'Task 1', text: 'test 1'}, {id: 2, title: 'Task 2', text: 'test 2'}, {id: 3, title: 'Task 3', text: 'test 3'}]
// Root resolver
const root = {
    users: users,
    tasks: tasks
};

// Create an express server and a GraphQL endpoint
const app = express();
const typeDefs  = importSchema(path.join(__dirname + '/types/schema.graphql'))
const test = makeExecutableSchema({ typeDefs })
app.get('/', (_, res) => res.send("Welcome!"))
app.use('/api', express_graphql({
    schema: test,
    rootValue: root,
    graphiql: true
}));

const port = config.app.port || 4000
app.listen(port, () => console.log(`Express GraphQL Server Now Running On localhost:${port}/api`));