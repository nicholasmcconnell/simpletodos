const db = require('../models');
const { Todo } = require('../models');

module.exports = {
    createTodo: async (req, res) => {
        try {

            const { title, description } = req.body;

            // validation

            if (!title) {
                return res.status(400).json({ msg: 'Not all fields have been entered.' })
            }

            const newTodo = new Todo({
                title,
                description,
                userId: req.user
            });

            db.Todo
                .create(newTodo)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))


        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    },

    getTodos: async (req, res) => {
        // const todos = await Todo.find({ userId: req.user })
        // res.json(todos);

        db.Todo
            .find({ userId: req.user })
            .sort({ created_at: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    deleteTodo: async (req, res) => {
        const todo = await Todo.findOne({userId: req.user, _id: req.params.id})

        if(!todo){
            return res.status(400).json({ msg: 'No todo found with this ID associated with this User.' })
        }

        db.Todo
            .findOne({ userId: req.user, _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

}