/*var koa = require('koa');
var views = require('koa-views');
var Router = require('koa-router');

var app = koa();

app.use(views(__dirname, 'jade'));
var router = new Router(app);
app.use(router.middleware());

var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];


app.use(function * (next) {
    //this.locals={
    //hello : 'from locals'
    //};
    this.status = 404;
    this.body = '404';
});
app.listen(3000);
*/
db = require('./models');
db.sequelize
    .sync({
        force: true
    })
    .complete(function (err) {
        if (err) {
            throw err
        } else {
            console.log("suc")
        }
    })