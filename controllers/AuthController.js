const {User} = require('../models')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

class AuthController {

    static signIn (req, res) {
        User.findOne({where : {username : req.body.username}})
        .then(found => {
            if (found == null) res.status(400).json({ message : 'Invalid username/password'})
            else {
                if (found) {
                    console.log(found)
                    if(!bcrypt.compareSync(req.body.password, found.password) ) {
                        res.status(400).json({ message : 'Invalid username/password'})
                    } else {
                        let {id, username} = found
                        let token = jwt.sign({id, username},
                            process.env.JWT_SECRET,
                            { expiresIn: '24h' }
                        );
                        res.status(200).json({
                            success: true,
                            message: 'Authentication successful',
                            token: token
                        });
                    }
                }
            }
        })
    }

    static signUp (req, res) {
        User.create({
            username : req.body.username,
            password : req.body.password
        })
        .then(created => {
           let {username } = created
            res.status(200).json({username, msg : 'You are registered!'})
        })
        .catch(err => {
            res.status(400).json(err)
        })  
    }
}

module.exports = AuthController