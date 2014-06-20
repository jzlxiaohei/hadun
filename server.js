var express  = require('express');
var app = express();


var config= require('./config');
var db = require('./models')();
var bodyParser = require('body-parser');

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.favicon());

app.use(express.cookieParser());
app.use(express.cookieSession());
app.use(express.csrf({secret: config.session_secret}));

app.use(app.router);
app.use(express.static(__dirname+'/assets'));

//var env = process.env.NODE_ENV || 'development';
//if ('development' == app.get('env')) {
//    app.use(express.errorHandler());
//}

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


require('./router/main')(app);


app.use(function(req,res) {
    res.send('404');
});
app.listen(config.port);

