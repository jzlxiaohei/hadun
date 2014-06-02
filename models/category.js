module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categoryName: DataTypes.STRING,
        desc: DataTypes.STRING

    },{
        classMethods: {
            associate: function (models) {
                Category.hasMany(models.Subject);
            }
        }
    })
    return Category;
}