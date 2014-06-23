var path = require('path');
var glob =require('glob');
module.exports = function(app){
    var filter = function()
    {
        var indexJs = path.join(__dirname+'/index.js');
        return function(file){
            if(path.join(file)===indexJs)
                return true;
            else
                return false;
        }
    }();
    glob.sync(__dirname +'/**/*.js')
        .forEach(function (file) {
            if(filter(file))return;
            var router = require(file);
            router(app);
        })
}