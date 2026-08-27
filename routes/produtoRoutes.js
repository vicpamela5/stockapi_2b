//contem todas as rotas do projeto

import express from 'express';
import * as controller from '../controllers/produtoController.js';
import {validarProduto} from '../middlewares/validarProduto.js';
import {validarAtualizacaoproduto,} from '../middlewares/validarProduto.js';


const router = express.Router();

router.post('/produtos' ,  validarProduto, controller.criar);
router.get('/produtos', controller.listar);     
router.get('/produtos/:id', controller.buscarPorId);//id passado no endpoint
router.patch('/produtos/:id', validarAtualizacaoproduto,controller.atualizar);
router.delete('/produtos/:id', controller.deletar);

export default router;