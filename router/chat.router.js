const KoaRouter = require("@koa/router");
const ChatController = require("../controller/chat.controller");

const chatRouter = new KoaRouter({ prefix: "/chats" });

chatRouter.post("/", ChatController.create);

chatRouter.all("/ws", async (ctx, next) => {
  const ws = ctx.websocket; 
  ctx.websocket = ws;
  await ChatController.websocket(ctx, next);
});

module.exports = chatRouter;
