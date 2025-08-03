const { Ollama } = require('@langchain/community/llms/ollama');
const model = new Ollama({
  baseUrl: 'http://localhost:11434',
  model: 'deepseek-r1:14b'
});

class ChatController {
  // 普通 HTTP 接口
  async create(ctx, next) {
    // 你可以处理一些聊天记录存储逻辑
    ctx.body = "Chat created (HTTP)";
  }

  // WebSocket 处理
  async websocket(ctx, next) {
    if (!ctx.websocket) {
      ctx.throw(400, "This route is only for WebSocket connections");
    }
    ctx.websocket.on('message', async (msg) => {
      try {
        const stream = await model.stream(msg.toString());

        for await (const chunk of stream) {
          ctx.websocket.send(JSON.stringify({
            data: chunk,
            isEnd: false
          }));
        }

        ctx.websocket.send(JSON.stringify({
          data: '',
          isEnd: true
        }));
      } catch (err) {
        console.error('处理消息时出错:', err);
        ctx.websocket.send(JSON.stringify({
          error: err.message,
          isEnd: true
        }));
      }
    });

    ctx.websocket.on('close', () => {
      console.log('WebSocket连接已关闭');
    });

    ctx.websocket.on('error', (err) => {
      console.error('WebSocket错误:', err);
    });
  }
}

module.exports = new ChatController();
