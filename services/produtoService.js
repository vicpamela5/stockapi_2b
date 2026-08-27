import pool from "../config/db";
const CAMPOS_PRODUTOS = ['nome', 'descricao', 'preco', 'quntd_estoque', 'categorias_id'];


//funcao para ciar um novo produto
//FAZ ALIGACAO COM BD
export async function criar(produto) {
    const { nome, descricao, preco, qntd_estoque,  categorias_id } = produto;
    const [r] = await pool.query('INSERT INTO produtos (nome, descricao, preco, qntd_estoque,  categorias_id )' +
        ' VALUES (?, ?, ?, ?, ?) ', [nome, descricao ?? null, preco, qntd_estoque ?? null,  categorias_id ]);
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

//funcao para atualizar um produto
export async function atualizar(id, camposAtualizados) {
const camposParaAtualizar = Object.keys(camposAtualizados).filter((campo) => CAMPOS_PRODUTOS.includes(campo))
const setClause = camposParaAtualizar.map((campo) => `${campo} = ?`).join(' , ');
const valores = camposParaAtualizar.map((campo) => camposAtualizados[campo])

    const [r] = await pool.query(`UPDATE produtos SET ${setClause} WHERE id `,
        [...valores, id] 
    );
      return r.affectedRows;
}

//funcao para deletar um produto
export async function deletar(id) {
    const [r] = await pool.query('DELETE FROM produtos  WHERE IS=?', [id]);
      return r.affectedRows;
}