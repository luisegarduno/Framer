const fastify = require("fastify")({
  logger: true,
});

const fastifyStatic = require("fastify-static");
const path = require("path");
fastify.register(fastifyStatic, {
  root: path.join(__dirname, "../public"),
});
fastify.register(require("fastify-cors"), {});
fastify.register(require("./video"));

const start = async () => {
  try {
    const PORT = 8000;
    await fastify.listen(PORT, '0.0.0.0');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
