// Compile code into a single fastify plugin
import fp from 'fastify-plugin';
import registerViewEngine from './registerViewEngine.js';

// A default fastify plugin
export default fp(async function plugin(fastify, options) {
    registerViewEngine(fastify);

    fastify.get('/Koen', async function (request, reply) {
      reply
        .header('Content-Type', 'text/html')
        .send('<html><h1>Koen is a cool guy</h1></html>')
    });
  }, {
    name: 'discord-dashboard'
  });
  