import pool from '../config/db.js';

export async function criar(categoria) {
    const { nome } = categoria;
    const [r] = await pool.query(
         'INSERT INTO categorias (nome) VALUES (?)',  [nome]
    );
      return r.insertid


};

export async function listar() {
  , const [rows] = await pool.query(
    'SELECT *FROM categorias'
   );
   return rows; 
}

export async function buscarPorId(id) {
    const [rows] = await pool.query(
         'SELECT *FROM categorias WHERE id - ?', [id]
    );
      return rows; 
}

export async function atualizar(id, categoria) {
    const {nome} = categoria;
    const [r] = await pool.query(
        'UPDATE categoria SET nome = ? WHERE id = ?', [nome, id] 
    );

    return r.affectedRows;
}

export async function deletar(id) {
    const [r] = await pool.query(
        'DELETE  FROM categorias WHERE id =?', [id]
    );
    return r.affectedRows;
}
