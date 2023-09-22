import createTableData from './utils/tableData.mjs';
import jsStringify from 'js-stringify';

// Compile code into a single fastify plugin
export default async function plugin(fastify, options) {
    fastify.get('/Bryce', async function (request, reply) {
      reply
        .header('Content-Type', 'text/html')
        .send('<html><h1>Bryce is a cool guy</h1></html>')
    });

    fastify.get('/inventory', async function (request, reply) {
        return reply.view('./views/hardware-inventory.pug', {jsStringify, ...(await createTableData())});
    });
  }
  