const jwt = require('jsonwebtoken');
const {Todo} = require('../models')
// console.log('masuk keisni?????');

module.exports = {
    authorize : async function (req,res, next) {
        try {
            let found = await Todo.findByPk(req.params.id)
            if (found.UserId == req.authenticatedUser.id) {
                console.log('disnisin');
                next()
            } else {
                res.status(401).json({msg : "You are not authorized to conduct this act!"})

            }
        } catch (error) {
            res.status(400).json(console.error())
        }
    }
}