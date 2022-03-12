const express = require('express');
const router = express.Router();
let data = require('../data');

router.get('/', (req, res) => {
  res.send(data);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const person = data.find((person) => person.id == id);
  if (person) {
    res.status(200).send(person);
  } else {
    res.status(402).end('bulunamadi');
  }
  res.send(person);
});

let next_id = 4;
router.post('/data', (req, res) => {
  let yeni_adam = req.body;
  yeni_adam.id = next_id;
  next_id++;
  data.push(yeni_adam);
  res.status(201).json(yeni_adam);
});
router.delete('/:id', (req, res) => {
  const silinecek = req.params.id;
  const person = data.find((person) => person.id == silinecek);
  if (person) {
    data = data.filter((x) => x.id != silinecek);
    res.status(204).end();
  } else {
    res.send({ message: 'böyle biri yok babba' });
  }
});

router.put('/:id', (req, res) => {
  const deg = req.params.id;
  let düzenlenen = req.body;
  let person = data.find((person) => person.id == deg);
  if (person) {
    data.splice(person.id - 1, 1, düzenlenen);

    res.status(200).send(düzenlenen);
  } else {
    res.status(404).send('noinfo');
  }
});

module.exports = router;
