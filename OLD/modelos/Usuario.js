// ORM usuário

const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");


const Usuario = sequelize.define("Usuario", {
    idUsuario:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Nome:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Cpf:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    Celular:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    Email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Senha:{
        type: DataTypes.STRING,
        allowNull: false
  }
});

const User = Usuario.build({Nome: "Joãozinho"});

console.log(User instanceof Usuario);
console.log(User.Nome);