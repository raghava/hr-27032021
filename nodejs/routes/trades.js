const express = require('express');
const router = express.Router();
const Trades = require('../models/trades');

router.get('/', async function(req, res, next) {
  console.log(req.query);
  const data = await Trades.findAll({ where: req.query });
  res.send(data, 200);
});

router.post('/', async function(req, res, next) {
  const data = await Trades.create(req.body);
  res.send(data, 201);
});

router.get('/:id', async function(req, res, next) {
  const data = await Trades.findOne({ id: req.params.id });
  if(data === null){
    res.send('ID not found', 404);
    return false;
  }

  res.send(data, 200);
});

function notSupported(req, res, next){
  res.send('Not supported', 405);
}

router.delete('/:id', notSupported);
router.patch('/:id', notSupported);
router.put('/:id', notSupported);

module.exports = router;
