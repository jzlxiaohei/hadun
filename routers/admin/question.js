/**
 * Created by zilong on 2014/6/23.
 */
module.exports = function(app){
    app.get('/admin/question.html',function(req,res){
        res.render('admin/question.html',{'nav-question':true})
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