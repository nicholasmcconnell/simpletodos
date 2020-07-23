const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

//API routes
router.use('/api', apiRoutes);

//No routes hit call react app
// UNCOMMENT WHEN TIED WITH FRONT END
router.use(function(req, res){
    // res.sendFile(path.join(__dirname, "../client/build/index.html"))
    res.send('in routes/index.js')
})

module.exports = router;