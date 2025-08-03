const app = require("./app/index");
const { SERVER_PORT } = require("./config/server");
require("./utils/handle-error")

app.listen(SERVER_PORT, () => {
  console.log("server is running on port ",SERVER_PORT);
});
