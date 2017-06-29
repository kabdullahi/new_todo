const express =  require('express');
const router = express.Router();
const models = require('.././models');

// router.get('/', function(req, res) {
//   res.render('index');
// });

router.get("/", function(req, res) {
  models.todo.findAll().then(function(todos) {
    res.render("index", {
      task: todos
    });
  });
});

router.post("/", function(req, res) {
  var todoPost = models.todo.build({
  task: req.body.task,
  complete: false,
  });
  todoPost.save().then(function() {
  res.redirect('/')
})
})

router.get("/delete/:id", function(req, res) {
  models.todo.findById(req.params.id).then(function(todo) {
    todo.destroy().then(function() {
      res.redirect("/");
    })
  })
})

module.exports = router;
