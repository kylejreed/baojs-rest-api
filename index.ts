import server from "./src/server";

const PORT = +process.env.PORT || 3001;
server.listen({ port: PORT });
