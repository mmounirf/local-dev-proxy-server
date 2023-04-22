import proxy from '@fastify/http-proxy';
import { config } from 'dotenv';
import fastify from 'fastify';

const server = fastify();

config();

server.register(proxy, {
  upstream: process.env.UPSTREAM,
  disableCache: true,
  cacheURLs: 0,
});

server.listen({ host: '0.0.0.0', port: Number(process.env.PORT) }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
