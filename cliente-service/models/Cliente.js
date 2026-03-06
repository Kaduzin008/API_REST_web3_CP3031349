import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

//Criando a Tabela Cliente no Banco de Dados//
const Cliente = sequelize.define('Cliente',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    timestamps: true //ADICIONA createdAt E updatedAt AUTOMATICAMENTE//
}
);

export default Cliente; //Exporta a tabela Cliente//