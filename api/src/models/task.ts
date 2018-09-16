import Model from './model'

export default class Task extends Model {
    constructor() {
        super()
        this.tableName = 'tasks'
    }
}