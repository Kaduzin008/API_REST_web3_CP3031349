import { Router } from "express";
import {
    createPedido,
    getPedidos,
    getPedidosById,
    updatePedido,
    deletePedido
} from '../controllers/pedido.controller.js';

const router = Router();

router.post('/', createPedido); //Cria a rota POST para criar um Pedido
router.get('/', getPedidos); //Cria a rota GET para Listar os Pedidos
router.get('/:id', getPedidosById); //Cria a rota GET para Listar Pedido por ID
router.put('/:id', updatePedido) //Cria a rota PUT para Atualizar Pedido por ID
router.delete('/:id', deletePedido) //Cria a rota DELETE para deletar Pedido por ID

export default router;