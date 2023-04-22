import proxy from '@fastify/http-proxy';
import fastify from 'fastify';

const server = fastify();

server.register(proxy, {
  upstream: 'https://api.newspaper.cloudai.network',
  disableCache: true,
  cacheURLs: 0,
});

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
