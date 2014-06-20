
var path = require('path');
var Sequelize = require('sequelize');
var lodash = require('lodash');
var glob = require('glob');
var config = require('../config')


module.exports =function(){
    var sequelize = new Sequelize(config.database,config.username,config.password,{
            dialect:config.dialect,
            port:config.db_port
        });

    var db = {};

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
            var model = sequelize.import(file);
            db[model.name] = model;
        })

    Object.keys(db).forEach(function(modelName){
        if('associate' in db[modelName]){
            db[modelName].associate(db);
        }
    })
    return lodash.extend(
        db, {
            sequelize: sequelize,
            Sequelize: Sequelize
        })

}