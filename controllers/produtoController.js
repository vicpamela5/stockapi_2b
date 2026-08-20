//funcao meio de campo

import * as service from '../services/produtoService';
 
//criar produto
export async function criar(req, res) {
    try {
        const {nome, preco} = req.body;
        if(!nome || !preco) {
            return res.status(400).json({erro: 'Dados não informados'});
        }

        const id = await service.criar(req.body);
        res.status(201).json({id, ...req.body});
    } catch (err) {
        res.status(500).json({erro: err.message })
    }
    
}

//funcao para listar todods os produtos
export async function listar(re, res) { 
    try {
        const produtos = await service.listar();
        if(!produtos) {
            return res.status(400).json({mensagem: 'nenhum produto encontrado'})
        }

        res.json(produtos);
    } catch (err) {
        res.status(500).json({erro: err.message});
    }
}

//funcao para buscar um produto pelo id
export async function buscarPorId(req, res) {
    try {
        const {id} = req.params;
        const produto = await service.buscarPorId(id);
        if(!produto) {
            return res.status(404).json({erro: 'Produto não encontrado'});
        }
    } catch (err) {
        res.status(500).json({erro: err.maessage});
    }
}
