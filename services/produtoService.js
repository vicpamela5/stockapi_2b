import pool from "../config/db";

//funcao para ciar um novo produto
//FAZ ALIGACAO COM BD
export async function criar(produto) {
    const { nome, preco, categorias_id } = produto;
    const [r] = await pool.query('INSERT INTO produtos (nome, preco, catetgotias_id)' +
        ' VALUES (?, ?, ?) ', [nome, preco, categorias_id]);
    return r.insertId;
};

//funcao para listar todods os produtos
export async function listar() {
    const rows = await pool.query('SELECT * FROM produtos');
    return(rows);
}

//funcao para buscar um produto pelo id
export async function buscarPorId(id) {
    const [rows] = await pool.query('SELECT * FROM produtos WHERE id=?', [id]);
    return rows[0];
    
}