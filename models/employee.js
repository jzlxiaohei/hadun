module.exports = function (sequelize, DataTypes) {
    var Employee = sequelize.define('Employee', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        level: DataTypes.STRING,
        extraInfo1: DataTypes.STRING,
        extraInfo2: DataTypes.STRING
    }, {
        associate: function (models) {

        }
    })

    return Employee;
}