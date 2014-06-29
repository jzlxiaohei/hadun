/**
 * Created by zilong on 2014/6/20.
 */
module.exports = function (sequelize, DataTypes) {
    var ChoiceQuestion = sequelize.define('ChoiceQuestion',
        {
            content: DataTypes.TEXT,
            choices:DataTypes.STRING,
            ans:DataTypes.STRING(5),
            type:DataTypes.STRING,
            hard_level:DataTypes.STRING(1),
            paperId:DataTypes.INTEGER,
            img_url:DataTypes.STRING
        }
    );
    return ChoiceQuestion;
}