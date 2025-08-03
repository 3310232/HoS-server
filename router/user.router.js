const KoaRouter = require("@koa/router");
const UserController = require("../controller/user.controller");
const { verifyUser,handlePassword,verifyLogin } = require("../middleware/user.middleware")

const userRouter = new KoaRouter({ prefix: "/users" });

userRouter.post("/create", verifyUser, UserController.create);

userRouter.post("/login", verifyLogin, UserController.login);


userRouter.get("/query", UserController.queryAll);

module.exports = userRouter;
