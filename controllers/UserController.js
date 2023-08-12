const { User } = require('../models')

class UserController {
  
  static getUsers(req, res, next) {
    User.findAll()
    .then(data => {
      return res.status(200).json({ data })
    })
    .catch(err => next(err))
  }

  static addUser(req, res, next) {
    const { firstName, lastName, email, birthday, location, country } = req.body

    User.create({ firstName, lastName, email, birthday, location, country })
    .then(data => {
      return res.status(201).json({ message: `User ${email} has been created.` })
    })
    .catch(err => { 
      next(err)
    })
  }

  static deleteUser(req, res, next) {
    const { email } = req.body

    User.delete( { where: { email }})
    .then(data => {
      return res.status(201).json({ message: `User ${email} has been deleted.` })
    })
    .catch(err => next(err))
  }
}

module.exports = UserController