const fastify = require('fastify');
const cors = require('@fastify/cors');

fastify.register(cors);

fastify.get('/', async (req, reply) => {
  const url = req.query.url;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
});

fastify.listen(3000, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Proxy server listening on port 3000');
});
