const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    
    const alias = "Actor";

    const cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull : false,
            autoIncrement : true,
        },
        first_name : {
            type : dataTypes.STRING(500),
            allowNull : false,
        },
       last_name : {
          type : dataTypes.STRING(500),
          allowNull : false,
      },
        rating : {
            type :  dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : true,

        },
      
        favorite_movie_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue: null,
        } 
    }
    const config = {
        tableName : "actors",
        timestamps : true, // si no existe deve ir false
        underscored : true, //  para que sequelize entienda guion bajo en el nombre de las columnas
    }

    const Actor = sequelize.define(alias,cols,config);
    
    return Actor
}
