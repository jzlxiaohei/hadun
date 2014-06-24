/**
 * Created by zilong on 2014/6/23.
 */
module.exports = function(app){
    app.get('/admin/question.html',function(req,res){
        res.render('admin/question.html',{'nav-question':true})
    })
}