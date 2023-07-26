const db = require("../db")

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const docs = await db.findAll();
    res.json(docs)
  } catch (err) {
    next(err)
  }
});

router.post('/', async (req, res, next) => {
  const name = req.body.name
  const age = parseInt(req.body.age)

  try {
    const result = await db.insert({ name, age })
    console.log(result)
    res.redirect('/')
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  const id = req.params.id
  const name = req.body.name
  const age = req.body.age

  try {
    const result = await db.update(id, { name, age })
    console.log(result)
    res.redirect('/')
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  const id = req.params.id

  try {
    const result = await db.deleteCustomer(id)
    console.log(result)
    res.redirect('/')
  } catch (err) {
    next(err)
  }
})

module.exports = router;
