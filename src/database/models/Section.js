module.exports = (sequelize,DataTypes) => {
    const alias = "Section";
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
        tableName:"sections",
        timestamp: true
    };
    const Section = sequelize.define(alias,cols,config);
    return Section;
}