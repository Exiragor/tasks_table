import { task } from '../models'

let tasks = () => task.all()

const createTask = (params) => task.create(params)

export default {
    tasks,
    createTask
}