let express = require('express');
let router = express.Router();

let Article = require('../models/article');

/* GET users listing. */
router.get('/', (req, res, next) => {
  Article.getArticles((err, articles) => {
    if (err) console.log(err);
    res.json(articles);
  });
});

router.get('/:id', (req, res, next) => {
  Article.getArticleById(req.params.id, (err, article) => {
    if (err) console.log(err);
    res.json(article);
  });
});

router.get('/category/:category', (req, res, next) => {
  Article.getArticlesByCategory(req.params.category, (err, articles) => {
    if (err) console.log(err);
    res.json(articles);
  });
});

router.post('/', (req, res, next) => {
  // Get Form Values
  let title = req.body.title;
  let category = req.body.category;
  let body = req.body.body;

  // Article Object
  let newArticle = new Article({
    title: title,
    category: category,
    body: body
  });

  // Create Article
  Article.createArticle(newArticle, (err, article) => {
    if (err) console.log(err);
    res.location('/articles');
    res.redirect('/articles');
  });
});

// Update Article
router.put('/', (req, res, next) => {
  let id = req.body.id;
  let data = {
    title: req.body.title,
    category: req.body.category,
    body: req.body.body
  };

  // Create Article
  Article.createArticle(id, data, (err, article) => {
    if (err) console.log(err);
    res.location('/articles');
    res.redirect('/articles');
  });
});

router.delete('/:id', (req, res, next) => {
  let id = req.params.id;

  // Create Article
  Article.createArticle(id, (err, article) => {
    if (err) console.log(err);
    res.location('/articles');
    res.redirect('/articles');
  });
});

module.exports = router;
