const app = require('../app')
const http = require('http')
const PORT = process.env.PORT || 3000
const cron = require('node-cron')
const server = http.createServer(app)
const cronScheduled = require('./cronjob')
cronScheduled()

server.listen(PORT, () => {
  console.log(`Server is Listening on Port : ${PORT}, ENV : ${process.env.NODE_ENV}`)
})