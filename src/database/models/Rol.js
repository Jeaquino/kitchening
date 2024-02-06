module.exports = (sequelize,DataTypes) => {
    const alias = "Rol";
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
        tablename:"roles",
        timestamp: true
    };
    const Rol = sequelize.define(alias,cols,config);
    return Rol;
}