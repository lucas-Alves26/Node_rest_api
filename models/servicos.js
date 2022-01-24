const moment = require("moment");
const atendimentos = require("../Controllers/atendimentos");
const servicos = require("../Controllers/servicos");
const conexao = require("../infraestrutura/conexao");

class Servico {
  adiciona(servico, res) {
    const data_cadastro = moment().format("YYYY-MM-DD HH:MM:SS");
    const data_atualizacao = moment().format("YYYY-MM-DD HH:MM:SS");

    const servicoValido = servico.servico.length >= 5;

    const validacoes = [
      {
        nome: "servico",
        valido: servicoValido,
        mensagem: "Servico deve ter pelo menos cinco caracters",
      },
    ];

    const erros = validacoes.filter((campo) => !campo.valido);
    const existeErros = erros.length;

    if (existeErros) {
      res.status(400).json(erros);
    } else {
      const servicoDatado = { ...servico, data_cadastro, data_atualizacao };
      const sql = "INSERT INTO Servicos SET ?";

      conexao.query(sql, servicoDatado, (erro, resultados) => {
        if (erro) {
          res.status(400).json(erro);
        } else {
          res.status(200).json(servico);
        }
      });
    }
  }
}

module.exports = new Servico();
