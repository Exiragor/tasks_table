import * as config from 'config'
import Database from './database'

export const db = new Database(config.db)

export default db.knex