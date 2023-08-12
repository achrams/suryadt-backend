# **Backend Test Email Sending**
An API project to add, delete, and send email to User using Moment.js, Express.js, Axios, Sequelize, Sequelize-cli, Cron, City Timezone, Moment Timezone, Postgres, dotenv, Jest, and Supertest.
## Installation
Installation using npm
```bash
  npm install
```

## Usage
Database Creation, Migration, and Seeding
```bash
  sequelize db:create --env test/development/production (choose one)
  sequelize db:migrate --env test/development/production (choose one)
  sequelize db:seed:all --env test/development/production (choose one)
```

Database Deletion, Undo Migration, and undo Seeding
```bash
  sequelize db:drop --env test/development/production (choose one)
  sequelize db:migrateLundo --env test/development/production (choose one) 
  sequelize db:seed:undo:all --env test/development/production (choose one)
```

Testing
```bash
  npm run test
```
Development
```bash
  npm run dev
```
Production
```bash
  npm run start
```

## Notes
- This Repository requires PostgreSQL to be installed on your Device.