import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import clienteRoutes from './routes/cliente.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use('/clientes', clienteRoutes);

(async () => {
    try {
        // Sincroniza o modelo com o banco de dados (cria a tabela se não existir)
        await sequelize.sync({ alter: true }); // use { force: true } apenas em desenvolvimento para recriar a tabela
        console.log('Cliente DB sincronizado');
        app.listen(process.env.PORT, () => {
            console.log(`Cliente Service rodando na porta ${process.env.PORT}`);
        });
    } catch (err) {
        console.error('Erro ao iniciar o Cliente Service:', err);
    }
});