module.exports = (sequelize,DataTypes) => {
    const alias = "Brand";
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
        },
        image:{
            type:DataTypes.STRING(255),
            allowNull: true,
        }
    };
    const config = {
        tableName:"brands",
        timestamp: true
    };
    const Brand = sequelize.define(alias,cols,config);
    return Brand;
}