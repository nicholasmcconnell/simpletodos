const router = require('express').Router();
const todoController = require('../../controllers/todoController');
const auth = require('../../middleware/auth');

console.log('in todo.js')

router.route('/')
    .post(auth, todoController.createTodo);

router.route('/all')
    .get(auth, todoController.getTodos);

router.route('/:id')
    .delete(auth, todoController.deleteTodo);

module.exports = router;

