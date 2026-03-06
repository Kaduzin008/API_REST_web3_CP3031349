import { Router } from "express";
import {
    createCliente,
    getClientes,
    getClienteById,
    updateCliente,
    deleteCliente
} from '../controllers/cliente.controller.js'

const router = Router();

router.post('/', createCliente); //Cria a rota POST para criar um Cliente
router.get('/', getClientes); //Cria a rota GET para Listar os Clientes
router.get('/:id', getClienteById); //Cria a rota GET para Listar Cliente por ID
router.put('/:id', updateCliente) //Cria a rota PUT para Atualizar Cliente por ID
router.delete('/:id', deleteCliente) //Cria a rota DELETE para deletar Cliente por ID

export default router