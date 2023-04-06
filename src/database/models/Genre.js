const { Sequelize, dataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    
    const alias = "Genre";

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull : false,
            autoIncrement : true,
        },
        name : {
            type : dataTypes.STRING(100),
        },
        ranking : { 
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true
        },
        active : {
            type :dataTypes.TINYINT,
            allowNull : false,
            defaultValue : 1,


        }
    }
    const config = {
        tableName : "genres",
        timestamps : true, // si no existe debe ir false
        underscored : true, //  para que sequelize entienda guion bajo en el nombre de las columnas
    }

    const Genre = sequelize.define(alias,cols,config);
    
    return Genre
}

