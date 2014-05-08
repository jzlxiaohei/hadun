module.exports = function (sequelize, DataTypes) {
    var Employee = sequelize.define('Employee', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        extraInfo1: DataTypes.STRING,
        extraInfo2: DataTypes.STRING,
        level: DataTypes.STRING
    }, {
        associate: function (models) {

        }
    })

    return Employee;
}