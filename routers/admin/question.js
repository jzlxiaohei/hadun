/**
 * Created by zilong on 2014/6/23.
 */
module.exports = function(app){
    app.get('/admin/question.html',function(req,res){
        var index =  req.query.index||1;
        var pageSize = 10;
        db.ChoiceQuestion.findAndCountAll({
            limit:pageSize,
            offset:(index-1)*pageSize,
            attributes: ['id', 'content','choices','ans','type','img_url']
        }).success(function(result){
            var count = result.count;
            var pageNum = Math.floor(result.count/pageSize) +1;
            var prevNum=undefined,
                nextNum = undefined;
            if(index!=1){prevNum = pageNum-1;}
            if(pageNum!=index){nextNum = pageNum+1;}

            res.render('admin/question.html',
                {questionList:result.rows,
                    pageNum:pageNum,
                    prevNum:prevNum,
                    nextNum:nextNum}
            );
        })
    })
    app.post('/admin/question/create',function(req,res){
        var body = req.body;
        db.ChoiceQuestion.create({
            content:body.content,
            choices:body.choices,
            ans:body.ans,
            type:body.type,
            img_url:body.img_url
        }).complete(function(err,choiceQuestion){
            if(err){
                res.json(500,{error:err});
            }else{
                res.json(200,choiceQuestion);
            }
        })
    })

}