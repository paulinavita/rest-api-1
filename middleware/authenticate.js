const jwt = require('jsonwebtoken');

module.exports = {
    authenticate : function (req,res, next) {
        try {
            const decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
            req.authenticatedUser= decoded
            console.log('adaaa');
            
            // console.log(req.authenticatedUser, 'ada y')
            next()
        } catch (err) {
            
            res.status(401).json({
                message : 'You are not logged in'
            })
        }
    }
}
