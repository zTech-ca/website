const app = require("express")();
const server = require("http").createServer(app);
const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
