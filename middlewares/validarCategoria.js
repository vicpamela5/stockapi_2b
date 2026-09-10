export function validarCategoria (req, res, next) {
    const {nome} = req.body;
    if (!nome || typeof nome !== 'string' || !nome.trim()) {
         return res.status(400).json ({erro: 'nome é obrigatorio e deve ser u+m texto'}); 
    }
    next();
}

