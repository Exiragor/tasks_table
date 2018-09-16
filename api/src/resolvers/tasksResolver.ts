import { Task } from '../models'

const tasks = () => Task.all()
const task = (args) => Task.get(args.id)
const createTask = (params) => Task.create(params)

export default {
    tasks,
    task,
    createTask
}