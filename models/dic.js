module.exports = function (sequelize, DataTypes) {
    var Dic = sequelize.define('Dic', {
        group: DataTypes.STRING,
        key: DataTypes.STRING,
        value: DataTypes.STRING
    }, {
        timestamps: false
    });

    return Dic;
}