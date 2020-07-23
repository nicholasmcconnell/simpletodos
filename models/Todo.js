const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    },
    created_at: { 
        type: Date,
        default: Date.now 
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;