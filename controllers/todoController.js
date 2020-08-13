const db = require('../models');
const { Todo } = require('../models');

module.exports = {
    createTodos: async (req, res) => {
        try {
            const { title, youTubeUrl, description } = req.body;

            // validation

            if (!title || !description || !youTubeUrl) {
                return res.status(400).json({ msg: 'Not all fields have been entered.' })
            }

            const newTodo = new Todo({
                title,
                youTubeUrl,
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
        const todo = await Todo.findOne({ userId: req.user });

        if (!todo) {
            return res.status(400).json({ msg: 'No todos found associated with this User.' })
        } else {

            db.Todo
                .find({ userId: req.user })
                .sort({ created_at: -1 })
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err));
        }
    },
    getTodo: async (req, res) => {
        db.Todo
            .find({ userId: req.user })
            .sort({ created_at: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    deleteTodo: async (req, res) => {
        const todo = await Todo.findOne({ userId: req.user, _id: req.params.id });

        if (!todo) {
            return res.status(400).json({ msg: 'No todo found with this ID associated with this User.' })
        }

        db.Todo
            .findOne({ userId: req.user, _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    updateTodo: async (req, res) => {
        const todo = await Todo.findOne({ userId: req.user, _id: req.params.id }, req.body);

        if (!todo) {
            return res.status(400).json({ msg: 'No todo found with this ID associated with this User.' })
        }

        db.Todo
            .findOneAndUpdate({ userId: req.user, _id: req.params.id }, req.body, { useFindAndModify: false })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

    }

}