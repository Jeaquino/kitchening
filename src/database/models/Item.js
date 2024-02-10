module.exports = (sequelize,DataTypes) => {
    const alias = "Item";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        quantity:{
            type:DataTypes.INTEGER,
            allowNull: true,
        },
        orderId:{
            type:DataTypes.INTEGER,
            allowNull: true,
        },
        productId:{
            type:DataTypes.INTEGER,
            allowNull: true,
        }
    };
    const config = {
        tableName:"items",
        timestamp: true
    };
    const Item = sequelize.define(alias,cols,config);
    return Item;
}