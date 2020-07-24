const router = require('express').Router();
const userRoutes = require('./users');
const todoRoutes = require('./todos')
const { connect } = require('mongoose');

router.use('/todos', todoRoutes);
router.use('/users', userRoutes);

module.exports = router;