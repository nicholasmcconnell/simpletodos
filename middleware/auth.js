const jwt = require('jsonwebtoken');

console.log('in auth.js');

const auth = async (req, res, next) => {
    try {

        const token = req.header('x-auth-token');

        if (!token) {
            return res
                .status(401)
                .json({ msg: "No authentication token, authorization denied." })
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!verified){
            {
                return res
                    .status(401)
                    .json({ msg: "Verification failed, authorization denied." })
            }
        }
        req.user = verified.id;
        console.log('in auth.js', req.user)
        next();

    } catch (err) {
        console.log('err in authjs', err)
        res.status(500).json({ error: err.message })

    }
}

module.exports = auth;