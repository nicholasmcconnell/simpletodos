const db = require('../models');
const { Todo } = require('../models');

module.exports = {
    createTodos: async (req, res) => {
        try {
            const { title, youTubeUrl, description } = req.body;

            // validation

            if (!title || !description) {
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

        console.log('todod in gettodos', todo);

        if (!todo) {
            console.log('in !todo if')
            db.Todo
                .find({ userId: req.user })
                .sort({ created_at: -1 })
                .then(dbModel => res.json(dbModel))
                .then(res.status(400).json({ msg: '2No todos found associated with this User.' }))
                .catch(err => {
                    console.log('todo err1', err)
                    res.status(400).json({ msg: '1No todos found associated with this User.' })
                    // res.status(422).json(err)
                });
        } else {

            db.Todo
                .find({ userId: req.user })
                .sort({ created_at: -1 })
                .then(dbModel => res.json(dbModel))
                .catch(err => {
                    console.log('todo err', err)
                    // res.status(400).json({ msg: 'No todos found associated with this User.' })
                    res.status(422).json(err)
                });
        }

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
    }

}