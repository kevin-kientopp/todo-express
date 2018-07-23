var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/todos', function(req, res, next) {
  console.log('req.body = ', req.body);
  var todo = {
    title: req.body.title.trim(),
    body: req.body.body.trim()
  };
  todos.push(todo);
  console.log('todo = ', todo);
  res.redirect('/todos');
});

module.exports = router;

