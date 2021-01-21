const router = require('express').Router();
const todoController = require('../../controllers/todoController');
const auth = require('../../middleware/auth');

router.route('/')
    .post(auth, todoController.createTodos);

router.route('/all')
    .get(auth, todoController.getTodos);

router.route('/latest')
    .get(auth, todoController.getTodo)

router.route('/:id')
    .delete(auth, todoController.deleteTodo);

router.route('/:id')
    .put(auth, todoController.updateTodo)

router.route('/search')
    .post(auth, todoController.searchTodos)

router.route('/searchyoutube')
    .post(auth, todoController.searchYoutube)

module.exports = router;

