module.exports = function (sequelize, DataTypes) {
    var Paper = sequelize.define('Paper', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        from1: DataTypes.STRING,
        from2: DataTypes.STRING,
        hard: DataTypes.STRING,
        whoTypeIn: DataTypes.STRING,
        desc: DataTypes.STRING
    }, {
        createdAt: 'inTime',
        associate: function () {
            Paper.hasMany(models.Choice);
        }
    });
    return Paper;
}