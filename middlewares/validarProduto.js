const CAMPOS_PRODUTOS = ['nome', 'descricao', 'preco', 'quntd_estoque', 'categorias_id'];

export function validarProduto(req, res, next) {
    const { nome, preco, qntd_estoque, categorias_id } = req.body;
    const erros = [];

    if (!nome  || typeof nome !== 'string' || !nome.trim()) {
        erros.push('nome e obrigatorio.');
    }

    if (preco === undefined || preco === null || typeof preco !== 'number' || preco <= 0) {
        erros.push('preco é obrigatorio e deve ser maior que zero.');
    }

    if (qntd_estoque !== undefined && (typeof qntd_estoque !== 'number' || qntd_estoque < 0)) {
        erros.push('quantidade de estoque deve ser maior ou igual a zero.');
    }

    if (!categorias_id || categorias_id !== undefined || categorias_id !== null || typeof categorias_id !== 'number') {
        erros.push('categorias_id  é obrigatorio deve ser maior que zero');
    }

    if (erros.length > 0) {
        res.status(400).json({ erros });
    }

    next();
}

export function validarAtualizacaoProduto(req, res, next) {
    const { nome, preco, qntd_estoque, categorias_id } = req.body;
    const erros = [];
    const caposEnviados = Object.keys(req.body).filter((campo) => CAMPOS_PRODUTOS.includes(campo));

    if (caposEnviados.length === 0) {
        erros.push('envie pelo menos um campo para atualizar.')
    }

    if (!nome !== undefined && (typeof nome !== 'string' || !nome.trim())) {
        erros.push('nome e obrigatorio.');
    }

    if (preco !== undefined && (typeof preco === null || typeof preco !== 'number' || preco) <= 0) {
        erros.push('preco é obrigatorio e deve ser maior que zero.');
    }

    if (qntd_estoque !== undefined && (typeof qntd_estoque !== 'number' || qntd_estoque < 0)) {
        erros.push('quantidade de estoque deve ser maior ou igual a zero.');
    }

    if (!categorias_id !== undefined && categorias_id !== undefined || categorias_id !== null && typeof categorias_id !== 'number') {
        erros.push('categorias_id  é obrigatorio deve ser maior que zero');
    }

    if (erros.length > 0) {
        res.status(400).json({ erros });
    }

    next();

}