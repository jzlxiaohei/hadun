/**
 * Created by zilong on 2014/6/20.
 */
//除选择题外的题目
module.exports = function (sequelize, DataTypes) {
    var Paper = sequelize.define('Question',
        {
            content: DataTypes.TEXT,
            ans:DataTypes.STRING,
            type:DataTypes.STRING,
            categories:DataTypes.STRING,
            hard_level:DataTypes.STRING(1)
        }
    );
    return Paper;
}