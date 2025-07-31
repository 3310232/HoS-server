const app = require("./app/index");
const { SERVER_PORT } = require("./config/server");

app.listen(SERVER_PORT, () => {
  console.log("server is running on port 8000");
});
