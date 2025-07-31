const KoaRouter = require("@koa/router");
const ChatController = require("../controller/chat.controller");

const chatRouter = new KoaRouter({ prefix: "/chats" });

chatRouter.post("/", ChatController.create);

chatRouter.all("/ws", async (ctx, next) => {
   console.log('aaaaa')
  const ws = ctx.websocket; // 直接拿
  ctx.websocket = ws;
  await ChatController.websocket(ctx, next);
});

module.exports = chatRouter;
