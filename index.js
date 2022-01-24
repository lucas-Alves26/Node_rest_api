const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/conexao");
const tabelas = require("./infraestrutura/tabelas");

conexao.connect((erro) => {
  if (erro) {
    console.log("Erro ao conectar ao MySql");
  } else {
    console.log("Conectado com sucesso");

    tabelas.CriandoTabelasBancoMySql(conexao); // Função para criar as tabelas

    const app = customExpress();
    app.listen(3000, () => console.log("servidor rodando na porta 3000"));
  }
});
