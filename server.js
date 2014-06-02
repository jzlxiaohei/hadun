var koa = require('koa');
var views = require('koa-views');
var Router = require('koa-router');
var hbs = require('koa-hbs');
var path =require('path');
var app = koa();

app.use(hbs.middleware({
    viewPath: __dirname + '/views',
    extname:'.html'
}));

var router = new Router(app);
router.render = app.render;
app.use(router.middleware());


var env = process.env.NODE_ENV || 'development';
var appConfig= require('./config/application.config.js')(env);
var dbConfig = require("./config/db.config")(env);
var db = require('./models')(dbConfig);
db.sequelize
    .sync({
        //force: true
    })
    .complete(function (err) {
        if (err) {
            throw err
        } else {
            console.log("suc")
        }
    })

require('./router/main')(router);


app.use(function * (next) {
    //this.locals={
    //hello : 'from locals'
    //};
    this.status = 404;
    this.body = '404';
});
app.listen(appConfig.port);

