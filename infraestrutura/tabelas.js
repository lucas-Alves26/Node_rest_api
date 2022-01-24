class Tabelas {
  CriandoTabelasBancoMySql(conexao) {
    this.conexao = conexao;
    this.criarAtendimentos();
    this.criarServicos();
  }

  criarAtendimentos() {
    const sql = `CREATE TABLE IF NOT EXISTS Atendimentos (
                    id int NOT NULL AUTO_INCREMENT,
                    cliente varchar(50) NOT NULL,
                    pet varchar(20),
                    servico varchar(20) NOT NULL,
                    status varchar(20) NOT NULL,
                    observacoes text,
                    data datetime NOT NULL,
                    data_cadastro datetime NOT NULL,
                    PRIMARY KEY(id)         
    )`;

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log("Erro ao criar tabela Atendimentos, " + erro);
      } else {
        console.log("Tabela Atendimentos criada com sucesso");
      }
    });
  }

  criarServicos() {
    const sql = `CREATE TABLE IF NOT EXISTS Servicos(
                    id int NOT NULL AUTO_INCREMENT,
                    servico varchar(100) NOT NULL,
                    preco decimal(6,2) NOT NULL,
                    data_cadastro datetime NOT NULL,
                    data_atualizacao datetime NOT NULL,
                    PRIMARY KEY(id) 
    )`;

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log("Erro ao criar tabela serviços, " + erro);
      } else {
        console.log("Tabela serviços criada com sucesso");
      }
    });
  }
}

module.exports = new Tabelas();
