module.exports = (sequelize,DataTypes) => {
    const alias = "State";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING(255),
            allowNull: false,
        }
    };
    const config = {
        tableName:"statuses",
        timestamp: true
    };
    const State = sequelize.define(alias,cols,config);
    return State;
}