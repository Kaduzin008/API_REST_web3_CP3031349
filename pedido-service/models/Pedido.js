import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

//Criando a Tabela Pedido no Banco de Dados//
const Pedido = sequelize.define('Pedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: true //ADICIONA createdAt E updatedAt AUTOMATICAMENTE//
}
)

export default Pedido; //Exporta a tabela Pedido//