const express = require("express");
const cors = require("cors");
const Conn = require ("./conn/Conn");
const TodoRoutes =  require("./routes/Todo.routes");

const app = express();
app.use(express.json());
app.use(cors());
Conn();

app.use("/tarefas",TodoRoutes);

const port = 3000;

app.listen(port, () => {
   console.info(`O app está rodando na porta http://localhost:${port}/`);
});
