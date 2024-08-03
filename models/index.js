const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, DataTypes);
db.Task = require('./task')(sequelize, DataTypes);

db.User.hasMany(db.Task, { as: 'tasks' });
db.Task.belongsTo(db.User, {
  foreignKey: 'userId',
  as: 'user',
});

module.exports = db;
