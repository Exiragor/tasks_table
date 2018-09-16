import db from '../database'

type ITasks = {
    title: string
    type: string
    status: string
}

export default class Task {
    tableName: string

    constructor() {
        this.tableName = 'tasks'
    }

    async all() {
        return await db.table(this.tableName).select()
    }

    async create(fields: ITasks) {
        let ids = await db.table(this.tableName).insert(fields)
        return ids[0]
    }
}