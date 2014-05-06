var koa = require('koa');
var views = require('koa-views');
var Router = require('koa-router');

var app = koa();
app.use(views(__dirname, 'jade'));


var router = new Router(app);
app.use(router.middleware());

var mongoose = require('mongoose');


//debug
//koa-logger
app.use(function * (next) {
    //this.locals={
    //hello : 'from locals'
    //};
    this.status = 404;
    this.body = '404';
});
app.listen(3000);