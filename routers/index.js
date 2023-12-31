const router = require('express').Router()
const user = require('./user')

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected.' })
})

router.use('/user', user)

module.exports = router