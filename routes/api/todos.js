const router = require('express').Router();
const todoController = require('../../controllers/todoController');
const auth = require('../../middleware/auth');

console.log('in todo.js')

router.route('/')
    .post(auth, todoController.createTodos);

router.route('/all')
    .get(auth, todoController.getTodos);

router.route('/latest')
    .get(auth, todoController.getTodo)

router.route('/:id')
    .delete(auth, todoController.deleteTodo);

module.exports = router;

