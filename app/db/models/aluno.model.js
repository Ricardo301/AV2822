const { timeStamp } = require('console')
const {DataTypes} = require ('sequelize')
const models = require('.')

const name = require('path').basename(__filename.replace(".model",""),".js")

const sequelize = require('../index').getConnection()

const Aluno = sequelize.define(name,
    {
        matricula:{
            type:DataTypes.STRING(10)
        }
    },
    
    
{
        sequelize,
        tableName:name,
        timestamps:false
    }
    )

Aluno.associate = (models)=>{
    Aluno.belongsTo(models.usuario,{
        foreignKey:{
           name: 'id_usuario' 
        },
        as: 'usuario'
    })
//Muitos para muitos
Aluno.belongsToMany(models.hardskill,{
    through:'aluno_hardskill',
    timestamps:false,
    foreignKey:{
        name:'id_aluno'
    },
    as:'hardskills'
})

}

module.exports = Aluno