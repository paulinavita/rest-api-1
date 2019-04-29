const router = require("express").Router()
const TodoController = require('../controllers/TodoController')
const {authenticate} = require('../middleware/authenticate')
const {authorize} = require('../middleware/authorize')

router.use(authenticate)
router.get("/", TodoController.findAllByUser)
router.get("/:id", TodoController.findById)
router.post("/", TodoController.createTodo)
router.delete("/:id", authorize, TodoController.deleteTodo)
router.put("/:id", authorize, TodoController.updateAllField)
router.patch("/:id", authorize,  TodoController.updateFewField)

module.exports = router