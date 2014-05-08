module.exports = function (sequelize, DataTypes) {
    var Paper = sequelize.define('Paper', {
        from: DataTypes.STRING,
        level: DataTypes.STRING
    }, {
        createdAt: 'inTime'
    });
    return Paper;
}