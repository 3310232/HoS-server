const KoaRouter = require("@koa/router");
const UserController = require("../controller/user.controller");

const userRouter = new KoaRouter({ prefix: "/users" });

userRouter.post("/", UserController.creat);
userRouter.get("/query", UserController.queryAll);

module.exports = userRouter;
