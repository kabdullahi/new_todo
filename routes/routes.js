const express =  require('express');
const router = express.Router();
const models = require('.././models');

router.get('/', function(req, res) {
  res.render('index');
});

router.get("/todo", function(req, res) {
  models.todo.findAll().then(function(todos) {
    console.log(todos);
    res.render("index", {
      task: todos
    });
  });
});

module.exports = router;
