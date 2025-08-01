const Koa = require("koa");
const userRouter = require("../router/user.router");
const chatRouter = require("../router/chat.router");
const bodyParser = require("koa-bodyparser");
const websockify = require("koa-websocket");
const cors = require("@koa/cors");

const app = websockify(new Koa());

app.use(cors());

app.use(bodyParser());

app.use(userRouter.routes());
app.use(chatRouter.routes());
app.ws.use(chatRouter.routes());

app.use(userRouter.allowedMethods());
app.use(chatRouter.allowedMethods());
app.ws.use(chatRouter.allowedMethods());

module.exports = app;
