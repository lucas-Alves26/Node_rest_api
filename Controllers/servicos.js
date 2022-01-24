const req = require("express/lib/request");
const Servico = require("../models/servicos");

module.exports = (app) => {
  app.post("/servicos", (req, res) => {
    const corpoServico = req.body;
    Servico.adiciona(corpoServico, res);
  });
};
