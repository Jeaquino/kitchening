module.exports = (sequelize,DataTypes) => {
    const alias = "Product";
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
        description:{
            type:DataTypes.TEXT,
            allowNull: false,
        },
        price:{
            type:DataTypes.INTEGER,
            allowNull: false,
            unsigned:false
        },
        discount:{
            type:DataTypes.INTEGER,
            allowNull: true,
            unsigned:false
        },
        sectionId:{
            type:DataTypes.INTEGER,
            allowNull: true
        },
        brandId:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
    };
    const config = {
        tableName:"products",
        timestamp: true
    };
    const Product = sequelize.define(alias,cols,config);
    return Product;
}