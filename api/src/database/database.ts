import * as Knex from 'knex'

export default class Database {
    knex: Knex

    constructor(db) {
        this.knex =  Knex({
            client: 'mysql',
            connection: {
                host : db.host,
                user : db.user,
                password : db.password,
                database : db.name
            }
        });
    }
}
