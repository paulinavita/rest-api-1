const {Todo} = require('../models')

class TodoController {

    static async findAllByUser(req, res) {
        try {
            let all = await Todo.findAll(
                {where : {UserId : req.authenticatedUser.id}})
            res.status(200).json(all)
        } catch (error) {
            console.log(error);
            
            res.status(400).json(error)
        }
    }

    static async findById(req,res) {
        try {
            let found = await Todo.findByPk(req.params.id)
            if (found) res.status(200).json(found)
            else res.status(404).json({message : 'No such id of todo'})
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async createTodo(req, res) {
        try {
            let created = await Todo.create({...req.body, UserId : req.authenticatedUser.id})
            res.status(201).json(created)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async deleteTodo(req,res) {
        try {
            let deleted = await Todo.destroy({ where: { id: req.params.id }})
            res.status(200).json(deleted)
        } catch (error) {
            res.status(400).json(error)
        }
    }
    static async updateAllField(req,res) {
        try {
            let found = await Todo.findByPk(req.params.id)
            let updated = await found.update(req.body)
            res.status(200).json(updated)
        } catch (error) {            
            res.status(400).json(error)
        }
    }

    static async updateFewField(req,res) {
        console.log('keupdatedan ga');
        
        try {
            let found = await Todo.findByPk(req.params.id)
            let updated = await found.update(req.body)
            res.status(200).json(updated)
        } catch (error) {
            res.status(400).json(error)
 
        }
    }
}

module.exports = TodoController