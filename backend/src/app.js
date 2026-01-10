'use strict'

const path = require('node:path')
const AutoLoad = require('@fastify/autoload')
const cors = require("@fastify/cors");
const env = require("./config/env");

// Pass --options via CLI arguments in command to enable these options.
const options = {}



module.exports = async function (fastify, opts) {
  // Place here your custom code!

  logger: {
    level: process.env.NODE_ENV === 'production' ? 'info' : 'debug'
    ransport: process.env.NODE_ENV !== 'production' ? {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname'
      }
    } : undefined
  }

  // Middlewares globais
  fastify.register(cors, {
    origin: [env.FRONT_HOST],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  });


  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in modules
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'modules'),
    options: Object.assign({}, opts)
  })
}

module.exports.options = options
