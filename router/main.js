//index.html
module.exports=function(app){
    app.get('/index.html',function *(next){
        yield this.render('index',{
            title:'hello'
        })

    })
}