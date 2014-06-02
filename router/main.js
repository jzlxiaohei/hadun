//index.html
module.exports=function(router){
    router.get('/index.html',function *(next){
        yield this.render('index',{
            title:'hello'
        })

    })
}