const {DataTypes} = require ('sequelize')
const models = require('.')

const name = require('path').basename(__filename.replace(".model",""),".js")

const sequelize = require('../index').getConnection()

const Curso = sequelize.define(name,
    {
        descricao:{
            type:DataTypes.STRING(50)
        },
    
    
    createdAt:{
        type: DataTypes.DATE,
        field: 'criado_em'
    },
    updatedAt:{
        type: DataTypes.DATE,
        field: 'atualizado_em'
    }
    
},  
{
        sequelize,
        tableName:name
        
    }
    )

module.exports = Curso