const conexao = require("../infraestrutura/conexao");

class Atendimento {
  adiciona(atendimento) {
    const sql = "INSERT INTO Atendimentos SET ?";

    conexao.query(sql, atendimento, (erro, resultados) => {
      if (erro) {
        console.log("Erro ao salvar atendimento, " + erro);
      } else {
        console.log("Atendimento salvo com sucesso, " + resultados);
      }
    });
  }
}

module.exports = new Atendimento();
