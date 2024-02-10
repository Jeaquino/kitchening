module.exports = (sequelize,DataTypes) => {
    const alias = "Order";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        total:{
            type:DataTypes.INTEGER,
            allowNull: true,
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull: true,
        },
        statusId:{
            type:DataTypes.INTEGER,
            allowNull: true,
        }
    };
    const config = {
        tableName:"orders",
        timestamp: true
    };
    const Order = sequelize.define(alias,cols,config);
    return Order;
}