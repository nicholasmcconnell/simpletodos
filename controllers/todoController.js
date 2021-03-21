const db = require('../models');
const axios = require('axios');

const { Todo } = require('../models');

module.exports = {
    createTodos: async (req, res) => {
        try {
            const { title, youTubeUrl, description, category } = req.body;

            // validation

            if (!title || !description || !youTubeUrl || !category) {
                return res.status(400).json({ msg: 'Not all fields have been entered.' })
            }

            const newTodo = new Todo({
                title,
                youTubeUrl,
                description,
                category,
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

        const { category } = req.body;


        if (category === 'category') {
            return res.status(400).json({ msg: 'Not all fields have been entered.' })
        }

        db.Todo
            .findOneAndUpdate({ userId: req.user, _id: req.params.id }, req.body, { useFindAndModify: false })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    searchTodos: async (req, res) => {
        const todo = await Todo.findOne({ userId: req.user });

        if (!todo) {
            return res.status(400).json({ msg: 'No todos found associated with this User.' })
        }

        if (!req.body.search) {
            return res.status(400).json({ msg: 'No todos found associated with this User.' })
        }

        db.Todo
            .find({ userId: req.user, $text: { $search: req.body.search } }, { useFindAndModify: false })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json('hi', err));

        // db.collection.find( { $text: { $search: "java coffee" } } )
        // db.supplies.runCommand("text", {search: "printer ink".split(" ").map(str => "\""+str+"\"").join(' ')})

    },
    searchYoutube: async (req, res) => {
        try {
            res = await axios.get('https://www.googleapis.com/youtube/v3/theburgershow');
            return res;
        } catch (err) {
            console.log()
            console.log("yuuuup - its an error", err)

        }
    }

}