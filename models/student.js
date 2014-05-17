module.exports = function (sequelize, DataTypes) {
    var Student = sequelize.define('Student', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        extraInfo1: DataTypes.STRING,
        extraInfo2: DataTypes.STRING,
        level: DataTypes.STRING,
        grade:DataTypes.STRING
    }, {
        associate: function (models) {

        }
    })

    return Student;
}