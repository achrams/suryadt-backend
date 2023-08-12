const cron = require('node-cron')
const cityTimezones = require('city-timezones')
const { User } = require('../models')
const timeCheck = require('./dateCheck')
const sendMail = require('./sendMail')

const cronScheduled = () => {
  cron.schedule('* * * * *', () => {
    console.log('==============Cron is running==============')
    User.findAll()
    .then((data) => {
      if(data) {
        data.forEach(el => {
          if(cityTimezones.lookupViaCity(el.location)) {
            if (timeCheck(el)) {
              sendMail(el)
            }
          } else {
            if (timeCheck(el)) {
              sendMail(el)
            }
          }
        })
      }
    })
  })
}

module.exports = cronScheduled