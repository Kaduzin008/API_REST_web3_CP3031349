import Pedido from '../models/Pedido.js';
import fetch from 'node-fetch';

//Função auxiliar para validar cliente
const validarCliente = async (clienteId) => {
    const url = `${process.env.CLIENTE_SERVICE_URL}/${clienteId}`; //Define a URL
    const res = await fetch(url); //Espera a verificacao do URL Funcionar
    if (!res.ok) { //Se nao funcionar, Mensagem de Error
        throw new Error('Cliente não encontrado');
    }
    return res.json(); //Se funcionar, valida o cliente
};

//Criar um novo pedido
export const createPedido = async (req, res) => {
    try { //Espera a validacao do Cliente
        await validarCliente(req.body.clienteId);
        const pedido = await Pedido.create(req.body); //Cria o pedido
        res.status(201).json(pedido); //Retorna Mensagem 201 (Sucesso) e o Pedido
    } catch (err) { //Mensagem de Error 400 (Bad Request)
        res.status(400).json({ error: err.message });
    }
};

//Listar todos os pedidos
export const getPedidos = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll(); //Busca TODOS os pedidos na tabela
        res.json(pedidos); //Retorna todos os pedidos
    } catch (err) {
        res.status(500).json({ error: err.message }) //Mensagem de Error 500
    }
};

//Busca um pedido por Id
export const getPedidosById = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) { //Mensagem de Error 404 Se nao achar o Pedido
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        res.json(pedido); //Caso contrario acha o Pedido pelo ID
    } catch (err) {
        res.status(500).json({ error: err.message });//Mensagem de Error 500
    }
};

//Atualizar um pedido
export const updatePedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id); //Busca um pedido pelo ID
        if (!pedido) { //Mensagem de Error 404 Se nao achar o Pedido
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        //Se o clienteId for alterado, valida novo cliente
        if (req.body.clienteId && req.body.clienteId !== pedido.clienteId) {
            await validarCliente(req.body.clienteId);
        }
        await pedido.update(req.body)//Espera e atualiza o pedido
        res.json(pedido); //Retorna o pedido alterado
    } catch (err) {
        res.status(400).json({ error: err.message })//Mensagem de Error 400
    }
};

//Deletar um pedido
export const deletePedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id); //Busca um pedido pelo ID
        if(!pedido) { //Mensagem de Error 404 Se nao achar o Pedido
            return res.status(404).json({ error: 'Pedido não encontrado' });
        }
        await pedido.destroy(); //Espera o banco e deleta o pedido
        res.json({ message: 'Pedido deletado com sucesso!' }) //Mensagem de sucesso
    } catch (err) {
        res.status(500).json({ error: err.message });//Mensagem de Error 500
    }
};