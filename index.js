import' dotenv/config';
import express from 'express';
import cors from 'cors';
import  produtosRouters from './routes/produtoRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => res.json('Ok!'));
app.use('/api/v1/stockapi', produtosRouters)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Rodando na port ${PORT}.`));