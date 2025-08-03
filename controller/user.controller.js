const UserService = require("../service/user.service");

class UserController {
  async create(ctx, next) {
    const user = ctx.request.body;

    const res = await UserService.create(user);

    ctx.body = {
      message: '创建用户成功',
      data: res
    }
  }

  async login(ctx, next) {

    const token = {
      name:'loginStatus',
      value:'yes',
    }

    ctx.body = {
      message: '登录成功',
      token:token,
      // data:res
    }

  }

  queryAll(ctx, next) {
    const users = UserService.queryAll();

    ctx.body = "users query";
  }
}

module.exports = new UserController();
