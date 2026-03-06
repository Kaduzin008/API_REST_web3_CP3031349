import Cliente from '../models/Cliente.js';

//Cria um novo Cliente
export const createCliente = async (req, res) => {
    try {
        const cliente = await Cliente.create(req.body); //O Await para o codigo ate a Consulta funcionar
        res.status(201).json(cliente); //Mensagem 201 significa Created
    } catch (err) {
        res.status(500).json({ error: err.message }); //Mensagem 500 significa Internal Error
    }
};

//Lista todos os Clientes
export const getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.findAll(); //o Find All procura todos os clientes na tabela Cliente
        res.json(clientes); //Retorna todos os clientes
    } catch (err) {
        res.status(500).json({ error: err.message }) //Mensagem de Error 500
    }
};

//Buscar um cliente por ID
export const getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);//Procura cliente pelo Parametro ID
        if (!cliente) { //Mensagem de Error 404 Se nao achar o Cliente
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(cliente); //Caso contrario acha o cliente pelo ID
    } catch (err) {
        res.status(500).json({ error: err.message });//Mensagem de Error 500
    }
};

//Atualiza um Cliente
export const updateCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id)//Procura cliente pelo Parametro ID
        if(!cliente) { //Mensagem de Error 404 Se nao achar o Cliente
            return res.status(404).json({ error: 'Cliente não encontrado'  });
        }
        await cliente.update(req.body);//Atualiza o cliente achado pelo ID
        res.json(cliente);//Retorna o Cliente pelo ID
    } catch (err) {
        res.status(500).json({ error: err.message });//Mensagem de Error 500
    }
};

//Deleta um Cliente
export const deleteCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id)//Procura cliente pelo Parametro ID
        if(!cliente) { //Mensagem de Error 404 Se nao achar o Cliente
            return res.status(404).json({ error: 'Cliente não encontrado'  });
        }
        await cliente.destroy();//Deleta o cliente achado pelo ID
        res.json({ message: 'Cliente deletado com sucesso!' });//Mensagem de sucesso
    }
    catch (err) {
        res.status(500).json({ error: err.message });//Mensagem de Error 500
    }
}

