const express = require('express')

module.exports = function(server) {
    const router = express.Router()

    // API routes
    server.use('/api', router)

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}