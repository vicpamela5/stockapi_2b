import * as service from '../services/categoriaService.js';

 export async function criar(req, res, next) {
    try {
        const id = await service.criar(req.body)
        res.status(201).json({id, ...req.body})
    } catch (error) {
        next(error);
    }
    
 }

 export async function listar(req, rs, next) {
    try {
        const categorias = await service.listar();
        res.json(categorias);
    } catch (error) {
        next(error);
    }
    
 }

 export async function buscarPorId(req, res, next) {
    try {
        const {id} = req.params
        const categoria = await service.buscarPorId(id);
        if (!categoria) {
            return res.status(404).json({erro: 'categoria nao encontrada'})
        }
        res.json(categoria)
    } catch (error) {
        next (error);
    }
    
 }

 export async function atualizar(req, es , next) {
    try {
        const {id}= req.params;
        const categoriaExistente = await service.buscarPorId(id);
        if (!categoriaExistente) {
            return res.status(404).json({erro: 'categoria nao encontrada'})
        }
        await service.atualizar(id, req.body);
        res.json({id, ...req.body});
    } catch (error) {
        next(error);
    }
    
 }

 export async function deletar(req, res, next) {
    try {
        const {id} = req.params;
        const linhasRemovidas = await service.deletar(id);
        if (linhasRemovidas===0) {
            return res.status(404).json({erro: 'categoria nao encontrada'})
        }
        res.status(204).send();//finalizar a req(semd0)
    } catch (error) {
        next (error);
    }
    
 }