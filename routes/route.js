const express = require('express');
const { sequelize } = require('../models');
const router = express.Router();
const { Studentinfo } = require('../models');
// const studentinfo = sequelize.models.Studentinfo;
console.log(Studentinfo);

router.route('/api/read').get(async (req, res) => {
  try {
    const info = await Studentinfo.findAll();
    res.json(info);
  } catch (err) {
    res.status(401).send('Something went wrong...', err);
  }
});

router.route('/api/create').post(async (req, res) => {
  try {
    const info = await Studentinfo.create({
      name: 'saikiran',
      course: 'blockchain',
      age: 21,
      createdAt: '2023-06-01T12:27:21.583Z',
      updatedAt: '2023-06-01T12:27:21.583Z',
    });
    res.json(info);
  } catch (err) {
    res.status(401).send('Something went wrong...', err);
  }
});

router.route('/api/update').put(async (req, res) => {
  try {
    const info = await Studentinfo.update(
      { course: 'Nodejs' },
      { where: { name: 'saikiran' } },
    );
    res.json(info);
  } catch (err) {
    res.status(401).send('Something went wrong...', err);
  }
});

router.route('/api/delete').delete(async (req, res) => {
  try {
    const info = await Studentinfo.destroy({ where: { name: 'saikiran' } });
    res.json(info);
  } catch (err) {
    res.status(401).send('Something went wrong...', err);
  }
});

module.exports = { router };
