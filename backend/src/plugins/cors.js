const fastifyPlugin = require("fastify-plugin");
const cors = require("@fastify/cors");


const CorsConfig = async (fastify, opts) => {
    await fastify.register(cors, {
        origin: ['https://escola-biblica-dominical.vercel.app'],
        // origin: ['http://localhost:5173'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
}

module.exports = fastifyPlugin(CorsConfig);