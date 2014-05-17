//TOOD 类别 m : m
// 试卷（paper)m:1
module.exports = function (sequelize, DataTypes) {
    var Subject = sequelize.define('Subject', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        content: DataTypes.STRING,
        answer: DataTypes.STRING,
        level: DataTypes.STRING,
        desc: DataTypes.STRING,
        sub_type: DataTypes.STRING
    }, {
        associate: function (models) {
            //Choice.hasOne(models.Paper);
        }
    })

    return Subject;
}