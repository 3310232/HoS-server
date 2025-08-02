const connection = require('../app/database')
class UserService {
  create(user) {
    console.log(user);

  }
  queryAll() {
    return [];
  }
}

module.exports = new UserService();
