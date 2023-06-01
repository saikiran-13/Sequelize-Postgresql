const Sequelize = require('sequelize');
const { models, sequelize } = require('./models');
const express = require('express');
const app = express();
const { router } = require('./routes/route');
const Studentinfo = sequelize.models.Studentinfo;
console.log(Studentinfo);
app.use('/', router);
// (async function () {
//   const student = await Studentinfo.create({
//     name: 'abc',
//     course: 'asdfsa',
//     age: '20',
//   });
//   console.log(student.name);
//   console.log(await Studentinfo.findAll());

//   const info = await Studentinfo.findAll({
//     attributes: ['id', 'name'],
//     where: {
//       course: 'blockchain',
//     },
//   });
//   console.log('Details......', info[0]);
// })();
app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
