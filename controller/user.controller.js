const UserService = require("../service/user.service");

class UserController {
  creat(ctx, next) {
    const user = ctx.request.body;

    UserService.create(user);

    ctx.body = "user create";
  }

  queryAll(ctx, next) {
    const users = UserService.queryAll();

    ctx.body = "users query";
  }
}

module.exports = new UserController();
