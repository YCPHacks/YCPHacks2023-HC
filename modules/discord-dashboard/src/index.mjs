// Compile code into a single fastify plugin

// A default fastify plugin
export default async function plugin(fastify, options) {
    fastify.get('/Koen', async function (request, reply) {
      reply
        .header('Content-Type', 'text/html')
        .send('<html><h1>Koen is a cool guy</h1></html>')
    });
  }
  