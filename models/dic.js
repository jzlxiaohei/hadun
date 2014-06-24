module.exports = function (sequelize, DataTypes) {
    var Dic = sequelize.define('Dic', {
        group: {type:DataTypes.STRING},//中英文皆可
        key: {type:DataTypes.STRING},
        value: DataTypes.STRING
    }, {
        timestamps: false
    });
    return Dic;
}