module.exports = function (sequelize, DataTypes) {
    var Paper = sequelize.define('Paper',
        {
            title: DataTypes.STRING,
            level: DataTypes.STRING(1)
        }
    );
    return Paper;
}