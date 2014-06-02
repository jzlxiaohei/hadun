var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var lodash = require('lodash');
var glob = require('glob');


module.exports =function(dbConfig){
    var sequelize = new Sequelize(dbConfig.database,dbConfig.username,dbConfig.password,
        dbConfig);

    var db = {};

    var indexJs = path.join(__dirname+'/index.js');
    function filter(file){
        if(path.join(file)===indexJs)
            return true;
        else
            return false;
    }
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