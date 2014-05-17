module.exports = function (sequelize, DataTypes) {
    var Dic = sequelize.define('Dic', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        group: DataTypes.STRING,
        key: DataTypes.STRING,
        value: DataTypes.STRING
    }, {
        timestamps: false
    });

    return Dic;
}