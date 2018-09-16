const config = require('config')

const db = config.db

console.log(db)

module.exports = {

  development: {
    client: 'mysql',
    connection: {
        host : db.host,
        user : db.user,
        password : db.password,
        database : db.name
    }
  },

  staging: {
    client: 'mysql',
    connection: {
        host : db.host,
        user : db.user,
        password : db.password,
        database : db.name
    }
  },

  production: {
    client: 'mysql',
    connection: {
        host : db.host,
        user : db.user,
        password : db.password,
        database : db.name
    }
  }

};
