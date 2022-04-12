async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://admin:Qwe123123qwe@workspace.cd77ovbthozc.sa-east-1.rds.amazonaws.com:3306/embraer_workspace");
    console.log("MySQL connected sucessfuly");
    global.connection = connection;
    return connection;
}

// const lineCount = async (valor) => {
//     const conn = await connect();
//     const [rows] = await conn.query(`SELECT COUNT (*) as Valor FROM master Where Ativo Like "%${valor}%" Or Hostname Like "%${valor}%" OR Classe Like "%${valor}%" OR Modelo Like "%${valor}%" OR Descricao Like "%${valor}%" OR PartNumber Like "%${valor}%" OR NumeroSerie Like "%${valor}%" OR Perifericos Like "%${valor}%" OR Fabricante Like "%${valor}%" OR Fornecedor Like "%${valor}%" OR DataRecebimento Like "%${valor}%" OR DataEntrega Like "%${valor}%" OR Vencimento Like "%${valor}%" OR Exercicio Like "%${valor}%" OR CartaRemessa Like "%${valor}%" OR NFRemessa Like "%${valor}%" OR NFVenda Like "%${valor}%" OR Contrato Like "%${valor}%" OR CrServico Like "%${valor}%" OR Usuario Like "%${valor}%" OR Unidade Like "%${valor}%" OR Local Like "%${valor}%" OR ChamadoServico Like "%${valor}%" OR ID Like "%${valor}%" OR Resumo Like "%${valor}%" OR Observacao Like "%${valor}%" OR Servico Like "%${valor}%" OR Status Like "%${valor}%" OR Operacao Like "%${valor}%" OR CrCobranca Like "%${valor}%" OR ChamadoEntrega Like "%${valor}%" OR ValorDolar Like "%${valor}%" OR ValorPtax Like "%${valor}%" OR ValorReais Like "%${valor}%" OR Lote Like "%${valor}%" OR ContratoEmbraer Like "%${valor}%" OR Login Like "%${valor}%" OR Nome Like "%${valor}%" OR Chapa Like "%${valor}%" OR Titulo Like "%${valor}%" OR Email Like "%${valor}%" OR Ramal Like "%${valor}%" OR Telefone Like "%${valor}%" OR Celular Like "%${valor}%" OR Departamento Like "%${valor}%" OR Empresa Like "%${valor}%" OR Site Like "%${valor}%"`);
//     return rows.pop();
// }
// module.exports = lineCount

const lineCount = async (valor) => {
    const conn = await connect();
    const [rows] = await conn.query(`SELECT Ativo, Hostname, Modelo, Descricao, (select COUNT(*) from embraer_workspace.master Where Ativo Like "%${valor}%") as Total from embraer_workspace.master where Ativo Like "%${valor}%"`);
    // console.log(rows)
    return rows;
}
module.exports = lineCount

// lineCount('COMPUTADOR')
