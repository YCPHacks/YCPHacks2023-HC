// Start up the web server here, locally should run on a different port than the API server
// Should compile all of the fastify plugins into a single fastify instance

import 'dotenv/config'; 
import Fastify from 'fastify';

// import registerPlugins from './plugins.js';
// import jsStringify from 'js-stringify';
import discordDashboard from "@ycphacks/discord-dashboard";
import hardwareCheckout from "@ycphacks/hardware-checkout";

console.log(hardwareCheckout);

// Creates a new Fastify instance
const fastify = Fastify({ logger: true });

fastify.register(discordDashboard);

fastify.register(hardwareCheckout);

// Register plugins
// registerPlugins(fastify);

// Run the server!
const start = async () => {
    try {
        await fastify.listen(3000);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();