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

//funcao para atualizar um produto
export async function atualizar(id, produto) {
    try {
        const [id] = req.params
        const n = await service.atualizar(id, req.body)
        if(n === 0) {
            returnres.status(404).json({erro: 'Produto não atualizado'});
        }
        res.json({id, ...req.body});
    } catch (err) {
        
        res.status(5000).json({err: message});
    }
}

//funcao para deletar um produto
export async function deletar(req, res) {
try {
    const {id} = req.params;
    const n =await service.deletar(id);
    if(n === 0) {
        return res.status(404).json({erro: 'id invalido'})
    }
    res.status(204).send();
} catch (err) {
    res.satus(500).json({erro: err.message});
}
}