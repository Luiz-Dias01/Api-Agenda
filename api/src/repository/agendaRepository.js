import {conexao} from './connection.js'

//Inserir contato
export async function Inserir(cont) {
    
    const comando =
        `INSERT INTO tb_agenda (nm_contato, ds_telefone, ds_email, bt_favorito, dt_cadastro)
            VALUES (?, ?, ?, ?, ?);`
    
        const [Resp] = await conexao.query(comando, [cont.contato, cont.telefone, cont.email, cont.favorito, cont.cadastro]);
        
    return Resp
}

//Buscar por todos os contatos
export async function Buscar(todos) {
    const comando = 
    `SELECT * FROM tb_agenda`

    const [Resp] = await conexao.query(comando, [todos])
    return Resp
}

//Buscar por nome
export async function buscarNome(nome) {

    const comando = 
    `SELECT nm_contato, dt_cadastro FROM tb_agenda
	        WHERE nm_contato = ?`

    const [Resp] = await conexao.query(comando, [nome]);
    return Resp[0];
}

//Buscar por favoritos
export async function Favoritos(favorito) {

    const comando = 
    `SELECT bt_favorito, nm_contato FROM tb_agenda
            WHERE bt_favorito = true`

    const [Dados] = await conexao.query(comando, [favorito]) 
    return Dados;
}

//Buscar por um intervalo de tempo
export async function Intervalo(inicio, fim) {
    const comando= 
    `SELECT dt_cadastro, nm_contato FROM tb_agenda
	        WHERE dt_cadastro BETWEEN ? AND ?;`

    const [Resp] = await conexao.query(comando, [inicio, fim]);
    return Resp
}


//Alterar contato
export async function Alterar(id, alt) {
    const comando = 
    `UPDATE tb_agenda 
	        SET nm_contato = ?,
		        ds_telefone = ?,
                ds_email = ?,
                bt_favorito = ?,
                dt_cadastro = ?
		            WHERE id_agenda = ?;`

    let [Resp] = await conexao.query(comando, [alt.contato, alt.telefone, alt.email, alt.favorito, alt.cadastro, id]);
    return Resp[0];

}

//Deletar contato

export async function Deletar(id) {
    console.log(id)

    const comando =
        `DELETE FROM tb_agenda
        WHERE id_agenda = ?;`
    
    const [Resp] = await conexao.query(comando, [id]);
    return Resp;
}