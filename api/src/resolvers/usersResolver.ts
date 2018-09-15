let users = [{id: 1, login: 'Test 1'}, {id: 2, login: 'Test 2'}, {id: 3, login: 'Test 3'}]

interface IParams {
    id: number
    login: string
}

const addUser = (params: {id: number, login: string}): Array<object> => {
    users.push({id: params.id, login: params.login})
    return users
}

export default {
    users,
    addUser
}