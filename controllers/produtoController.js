// meio de campo

import * as service from '../services/produtoService';
 
//criar produto
export async function criar(req, res, next) {
    try {
        const id = await service.criar(req.body);
        res.status(201).json({id, ...req.body});
    } catch (err) {
       next(err);
    }
    
}

//funcao para listar todods os produtos
export async function listar(re, res, next) { 
    try {
        const produtos = await service.listar();
        res.json(produtos);
    } catch (err) {
       next(err);
    }
}

//funcao para buscar um produto pelo id
export async function buscarPorId(req, res, next) {
    try {
        const {id} = req.params;
        const produto = await service.buscarPorId(id);
        if(!produto) {
            return res.status(404).json({erro: 'Produto não encontrado'});
        }
    } catch (err) {
        next(err);
    }
}

//funcao para atualizar um produto
export async function atualizar(req, res, next) {
    try {
        const {id} = req.params
        const produtoExistenet = await service.buscarPorId(id)
        if(!produtoExistenet) {
            return res.status(400).json({erro: 'Produto não encontrado'});
        }
        await service.atualizar(id, req.body);

        const produroAtualizado = await service.buscarPorId(od)
        res.json(produroAtualizado);

    } catch (err) {
        next(err);
    }
}

//funcao para deletar um produto
export async function deletar(req, res, next) {
try {
    const {id} = req.params;
    const n =await service.deletar(id);
    if(n === 0) {
        return res.status(404).json({erro: 'id invalido'})
    }
    res.status(204).send();
} catch (err) {
    next(err);
}
}