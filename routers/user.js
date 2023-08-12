const router = require('express').Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.getUsers)
router.post('/', UserController.addUser)
router.delete('/', UserController.deleteUser)

module.exports = router