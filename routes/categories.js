let express = require('express');
let router = express.Router();

let Category = require('../models/category');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Category.getCategories((err, categories) => {
    if (err) console.log(err);
    res.json(categories);
  });
});

router.get('/:id', (req, res, next) => {
  Category.getCategoryById(req.params.id, (err, category) => {
    if (err) console.log(err);
    res.json(category);
  });
});

module.exports = router;
