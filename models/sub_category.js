module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cateName: DataTypes.STRING,
        desc: DataTypes.STRING

    })
}