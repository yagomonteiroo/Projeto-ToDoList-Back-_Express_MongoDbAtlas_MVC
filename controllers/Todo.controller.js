const mongoose = require('mongoose');
const TodoService = require('../services/Todo.services');

const todoService = new TodoService();

class TodoController {
   getTarefas = async (req, res) => {
      const tarefas = await todoService.findAll();
      if (!tarefas.length) {
         res.status(204).send({message:'Nenhuma tarefa cadastrada!'});
         return
      }
      res.status(200).send(tarefas);
   };

   getTarefaById = async (req, res) => {
      const id= req.params.id;
      if(!mongoose.Types.ObjectId.isValid(id)) {
         res.status(403).send({message:'Id Inválido!'});
         return;
      };
      const tarefa = await todoService.findById(id);
      if (!tarefa) {
         res.status(404).send({message: 'Tarefa não encontrada!'});
         return
      }
      res.status(200).send(tarefa);
   };

   createTarefa = async (req, res) => {
      const tarefa= req.body;
      if (!tarefa) {
         res.status(404).send({message:'Nenhuma tarefa cadastrada! Favor preencher todos os campos'});
         return
      }
      const novaTarefa = await todoService.createTarefa(tarefa)
      .then(()=>{
         res.status(201).send({message:'Tarefa cadastrada com sucesso!'})
      })
      .catch(err => res.status(500).send({error:`erro no servidor --> ${err}`}))
   };

   updateTarefa =  async (req, res) => {
      const id = req.params.id;
      if(!mongoose.Types.ObjectId.isValid(id)) {
         res.status(403).send({message:'Id Inválido!'});
         return;
      }
      const tarefa= req.body;
      if (!tarefa) {
         res.status(404).send({message:'Nenhuma tarefa cadastrada! Favor preencher todos os campos'});
         return
      }
      await todoService.editTarefa(id, tarefa)
      .then(() => res.status(200).send({message:'Tarefa atualizada com sucesso.'}))
      .catch( err => res.status(500).send({error:`erro no servidor --> ${err}`}))
   };
   

   deleteTarefa = async (req, res) => {
      const id = req.params.id;
      if(!mongoose.Types.ObjectId.isValid(id)) {
         res.status(403).send({message:'Id Inválido!'});
         return;
      }
      await todoService.deleteTarefa(id)
      .then(()=> res.status(200).send({message:'Excluido com sucesso!'}))

   }
}

module.exports = TodoController;