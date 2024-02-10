module.exports = (sequelize,DataTypes) => {
    const alias = "Address";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        address:{
            type:DataTypes.STRING(255),
            allowNull: false,
        },
        city:{
            type:DataTypes.STRING(255),
            allowNull: false,
        },
        province:{
            type:DataTypes.STRING(255),
            allowNull: false,
        },
        user_id:{
            type:DataTypes.INTEGER,
            allowNull: false
        }
    };
    const config = {
        tableName:"addresses",
        timestamp: true
    };
    const Address = sequelize.define(alias,cols,config);
    return Address;
}