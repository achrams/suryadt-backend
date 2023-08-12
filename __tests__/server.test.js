const request = require('supertest')
const app = require('../app')
const { sequelize } = require('../models');
const { queryInterface } = sequelize;

const userTest = {
  email: 'usermail@gmail.com',
  firstName: 'John',
  lastName: 'Doe',
  country: 'USA',
  location: 'Los Angeles',
  birthday: '12 Aug 2000',
  doSent: new Date()
}

describe('User Endpoints', () => {
  describe('POST', () => {
    it('Success POST Return Status code 201', () => {
      request(app)
      .post('/user')
      .send(userTest)
      .end((err,res) => {
        expect(res.statusCode).equalTo(201)
      })
    })
    it('Duplicated POST Return Status Code 400', () => {
      request(app)
      .post('/user')
      .send(userTest)
      .end((err,res) => {
        expect(res.statusCode).equalTo(400)
      })
    })
  })
  describe('DELETE', () => {
    it('Success Delete Return Status code 201', () => {
      request(app)
      .delete('/user')
      .send({email : userTest.email})
      .end((err,res) => {
        expect(res.statusCode).equalTo(201)
      })
    })
    it('Failed DELETE Return Status Code 400', () => {
      request(app)
      .delete('/user')
      .send({email : userTest.email})
      .end((err,res) => {
        expect(res.statusCode).equalTo(400)
      })
    })
  })
})


afterAll(() => {
  queryInterface.bulkDelete('Users')
})
