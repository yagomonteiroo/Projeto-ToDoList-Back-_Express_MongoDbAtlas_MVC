const mongoose = require("mongoose");

const Conn = (url,user,pass,data) => {
   mongoose
      .connect(`${url}/${data}`, {
         user: user,
         pass: pass,
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDb Connected"))
      .catch((err) => console.log("Falha na conexão com Mongo DB", err));
};

module.exports = Conn;