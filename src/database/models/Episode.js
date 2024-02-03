module.exports = (sequelize,DataTypes) => {
    const alias = "Episode";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
            unsigne:true
        },
        title:{
            type:DataTypes.STRING(500),
            allowNull: false,
        },
        number:{},
        rating:{},
        season_id:{}
    };
    const config = {
        tablename:"",
        timestamp: true
    };
    const Episode = sequelize.define(alias,cols,config);
    return Episode;
}