module.exports = (sequelize,DataTypes) => {
    const alias = "Image";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        file:{
            type:DataTypes.STRING(255),
            allowNull: true,
        },
        productId:{
            type:DataTypes.INTEGER,
            allowNull: false,
        }
    };
    const config = {
        tableName:"images",
        timestamp: true
    };
    const Image = sequelize.define(alias,cols,config);
    return Image;
}