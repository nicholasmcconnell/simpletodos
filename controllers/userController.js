const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

module.exports = {
    createUser: async (req, res) => {
        try {
            let { email, password, passwordCheck, displayName } = req.body;

            if (!email || !password || !passwordCheck) {
                return res.status(400).json({ msg: 'Not all fields have been entered.' });
            }

            if (password.length < 5) {
                return res
                    .status(400)
                    .json({ msg: 'The password needs to be at least 5 charecters long.' });
            }

            if (password !== passwordCheck) {
                return res
                    .status(400)
                    .json({ msg: 'Passwords do not match.  Enter the same password twice for verification' });
            }

            const existingUser = await User.findOne({ email: email })

            if (existingUser) {
                return res
                    .status(400)
                    .json({ msg: 'An account with this email already exists.' });
            }

            if (!displayName) {
                displayName = email;
            }

            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(passwordCheck, salt);

            const newUser = new User({
                email,
                password: passwordHash,
                displayName
            })

            db.User
                .create(newUser)
                .then(dbModel => res.json(dbModel))
                .catch(err => res.status(422).json(err))

        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    },

    readLogin: async (req, res) => {
        try {
            const { email, password } = req.body;

            //validate
            if (!email || !password) {
                return res.status(400).json({ msg: 'Not all fields have been entered.' });
            }
            const user = await User.findOne({ email: email })

            if (!user) {
                return res.status(400).json({ msg: 'No account with this email has been registered' });
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({ msg: 'Invalid credentials.' })
            }

            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.json({
                token,
                user: {
                    id: user._id,
                    displayName: user.displayName
                }
            })
        } catch (err) {
            res.status(500).json({ error: err.message })
        }
    },

    deleteUser: async (req, res) => {
        try {
            const deletedUser = await User.findByIdAndDelete(req.user);
            res.json(deletedUser);
        } catch (err) {
            res.status(500).json({ error: err.message })

        }
    },

    readToken: async (req, res) => {
        try {
            const token = req.header('x-auth-token');

            if(!token){
                return res.json(false);
            }

            const verified = jwt.verify(token, process.env.JWT_SECRET);
            console.log(verified.id);

            if(!verified){
                return res.json(false);
            }

            const user = await User.findById(verified.id);
          
            if (!user){
                ("in user if statement")
                return res.json(false);
            }

            return res.json(true);

        } catch (err) {
            res.status(500).json({ error: err.message })

        }
    },

    readCurrentUser: async (req, res) => {
        const user = await User.findById(req.user);
        res.json({
            displayName: user.displayName,
            id: user._id
        });
    }
}