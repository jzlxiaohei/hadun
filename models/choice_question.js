/**
 * Created by zilong on 2014/6/20.
 */
module.exports = function (sequelize, DataTypes) {
    var Paper = sequelize.define('ChoiceQuestion',
        {
            content: DataTypes.TEXT,
            choices:DataTypes.STRING,
            ans:DataTypes.STRING(5),
            type:DataTypes.STRING,
            categories:DataTypes.STRING,
            hard_level:DataTypes.STRING(1),
            img_url:DataTypes.STRING
        }
    );
    return Paper;
}