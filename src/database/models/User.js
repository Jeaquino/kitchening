module.exports = (sequelize,DataTypes) => {
    const alias = "User";
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
        surname:{
            type:DataTypes.STRING(255),
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING(255),
            allowNull: false,
            unique:true
        },
        password:{
            type:DataTypes.STRING(255),
            allowNull: false,
        },
        image:{
            type:DataTypes.STRING(255),
            allowNull: false,
        },
        gender:{
            type:DataTypes.STRING(255),
            allowNull: true,
        },
        birthday:{
            type:DataTypes.DATE,
            allowNull: true,
        },
        about:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        rol:{
            type:DataTypes.STRING,
            allowNull: true,
        },
        roleId:{
            type:DataTypes.STRING,
            allowNull: true,
        },
    };
    const config = {
        tablename:"users",
        timestamp: true
    };
    const User = sequelize.define(alias,cols,config);
    return User;
}