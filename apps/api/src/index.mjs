import 'dotenv/config'; 
import Fastify from 'fastify';
import registerServices from './registerServices.mjs';

const fastify = Fastify({ logger: true });

registerServices(fastify);

const start = async () => {
    try {
        await fastify.listen(process.env.PORT);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();