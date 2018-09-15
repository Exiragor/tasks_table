import * as merge from 'lodash/merge'
import usersResolver from './usersResolver'
import tasksResolver from './tasksResolver'

export default merge(
    usersResolver,
    tasksResolver
)