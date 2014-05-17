module.exports = function (sequelize, DataTypes) {
    var Record = sequelize.define('Record', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        stuId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subjectId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ans: {
            type: DataTypes.STRING,
        },
        result: {
            type: DataTypes.ENUM,
            values: ['r', 'w', 'u']
        }
    }, {
        associate: function (models) {

        }
    })

    return Record;
}