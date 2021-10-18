const express = require ('express');
const ToDoController = require('../controllers/Todo.controller');
const router = express.Router();
const tarefasController = new ToDoController(); 

router.get('/', tarefasController.getTarefas);
router.get('/:id', tarefasController.getTarefaById);
router.post('/', tarefasController.createTarefa);
router.put('/:id', tarefasController.updateTarefa);
router.delete('/:id', tarefasController.deleteTarefa);




module.exports = router;