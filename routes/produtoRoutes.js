//contem todas as rotas do projeto

import express from 'express';
import * as controller from '../controllers/produtoController.js';

const router = express.Router();

router.post('/produtos' , controller.criar);
router.get('/produtos', controller.listar);     
router.get('/produtos/:id', controller.buscarPorId);//id passado no endpoint

export default router;