module.exports = function (sequelize, DataTypes) {
    var Student = sequelize.define('Student', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        extraInfo1: DataTypes.STRING,
        extraInfo2: DataTypes.STRING,
        level: DataTypes.STRING
    }, {
        associate: function (models) {

        }
    })

    return Student;
}