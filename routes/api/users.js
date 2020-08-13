const router = require('express').Router();
const userController = require('../../controllers/userController');
const auth = require('../../middleware/auth');

router.route('/register')
    .post(userController.createUser);

router.route('/login')
    .post(userController.readLogin);

router.route('/delete')
    .delete(auth, userController.deleteUser);

router.route('/tokenIsValid')
    .post(userController.readToken);

router.route('/')
    .get(auth, userController.readCurrentUser);

module.exports = router;