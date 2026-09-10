import pool from "../config/db";

//cadastar cliente
export async function cadastrar(cliente) {
    const { nome, email, telefone } = cliente;
    const [r] = await pool.query('INSERT INTO cliente (nome, email, telefone)' +
        'VALUES (?,?,?)', [nome, email, telefone]);
    return r.insertId;
}

//listar clt
export async function listar() {
    
}

//buscar por  id (nome)
export async function buscarPorId(id) {
   const [rows] = await pool.query(

   )
}

//atualizar



//deletar