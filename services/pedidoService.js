import pool from "../config/db";
const CAMPOS_CLIENTES = ['nome', 'telefone'];

//criar 

export async function criar(pedido) {
    const {client_id, status } = produto;
    const [r] = await pool.query(
        'INSERT INTO pedidios (client_id, status) VALUES (?, ?)', 
        [client_id, status || 'pendente']
    );
    return r.insertId;
}

export async function atualizarStatus(id, status) {
    const [r] = await pool.query(
        'UPDATE pedidos SET status =?  WHERE id = ?',
        [status, id] 
    );
    return r.affectedRows;
}

export async function deletar(id) {
    const [r] = await pool.query ('DELETE FROM pedidos WHERE id = ?', [id]);
    return r.affectedRows;
}