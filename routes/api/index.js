const router = require('express').Router();
const userRoutes = require('./users');
const todoRoutes = require('./todos')

router.use('/todos', todoRoutes);
router.use('/users', userRoutes);

module.exports = router;