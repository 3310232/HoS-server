const connection = require('../app/database')
class UserService {
  async create(user) {
    const{userName,password} = user

    const statement = `INSERT INTO user (userName,password) VALUES ('${userName}','${password}')`

    const [res] = await connection.execute(statement)

    return res

  }
  queryAll() {
    return [];
  }
  async queryByName(name){
    const statement = `select * from user where userName = '${name}'`

    const [res] = await connection.execute(statement)

    return res
  }
}

module.exports = new UserService();
