import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import  produtosRouters from './routes/produtoRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json('Ok!'));//saude do servidor
app.use('/api/v1/stockapi', produtosRouters) //

app.use((req, res) => {
    res.status(404).json({erro: `Rota ${req.method} ${req.originalUrl} - não foi encontrada`});
});

app.use((erro, req, res, next) => {
    console.error(erro);
    if(erro.code === 'ER_NO_REFERENCED_2'){
        return res.status(400).json({erro: 'cateogoria_id informado não existe'})
    }

    res.status(500).json({erro: 'Erro interno no servidor.'})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando na port ${PORT}.`));