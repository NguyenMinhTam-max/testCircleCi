const express = require('express')
const environment = require('./environments/environment')
const server = require('./routersConfig/server')
const routers = require('./routersConfig/routers')

server.set('port', environment.portServer)
server.use(routers)

server.listen(environment.portServer, () => {
	console.log(`Server Is Starting At:${environment.portServer}`)
})
