import * as Knex from 'knex'
import db from '../database'

export default class Model {
    tableName: string
    db: Knex

    constructor() {
        this.db = db
    }

    async all(args: any = false) {
        let query = db.table(this.tableName)
        if (args) {
            return await query.where(args).select()
        } else {
            return await query.select()
        }
    }

    async create(fields: object) {
        let ids = await db.table(this.tableName).insert(fields)
        return ids[0]
    }

    async get(id) {
        return await db.table(this.tableName).where({ id }).first()
    }
}