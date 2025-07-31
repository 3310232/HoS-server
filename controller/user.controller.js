const UserService = require("../service/user.service");

class UserController {
  creat(ctx, next) {
    const user = ctx.request.body;

    UserService.create(user);

    ctx.body = "user create";
  }
}

module.exports = new UserController();
