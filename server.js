var express  = require('express');
var app = express();
var bodyParser = require('body-parser');
var config= require('./config');
var hbs = require('hbs');
var formidable = require('formidable');

hbs.registerPartials(__dirname+"/views/partials")
app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.favicon());

app.use(express.cookieParser());
app.use(express.cookieSession({secret: config.session_secret}));
//app.use(express.csrf());

app.use(app.router);
app.use(express.static(__dirname+'/assets'));

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
    app.use(express.errorHandler());
}

var db  = global.db = require('./models')();
require('./routers')(app);
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


require('./routers/main')(app);


app.use(function(req,res) {
    res.send('404');
});
app.listen(config.port);

