const errorHandler = (err, req, res, next) => {
  if (err.name == 'SequelizeValidationError') {
    const errors = err.errors.map(el => {
      return {message: el.message}
    })
    return res.status(400).json({
      name: 'Bad Request',
      errors: errors
    })
  }
  if (err.name == 'SequelizeUniqueConstraintError') {
    const errors = err.errors.map(el => {
      return {message: el.message}
    })
    return res.status(400).json({
      name: 'Bad Request',
      errors: errors
    })
  } else {
    const errors = err.errors.map(el => {
      return {message: el.message}
    })
    return res.status(500).json({
      name: 'Internal Server Error',
      errors: errors
    })
  }
}

module.exports = errorHandler