const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('learnings', 'postgres', 'sailearnings', {
  host: 'localhost',
  dialect: 'postgres',
});

(async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Authentication done successfully!!!');
    setTimeout(() => {
      sequelize.close();
      console.log('Connection closed................');
    });
  } catch (error) {
    console.log('An error occured', error);
  }
})();
