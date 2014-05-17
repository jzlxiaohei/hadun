var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var lodash = require('lodash');
var sequelize = new Sequelize('h_test', 'root', '111111');
var db = {};

var modelDir = __dirname;

fs.readdirSync(modelDir)
    .filter(function (file) {
        return (file.slice(-3) === '.js' && file !== 'index.js')
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(modelDir, file));
        console.log(model.name);
        db[model.name] = model;
    })

module.exports = lodash.extend(
    db, {
        sequelize: sequelize,
        Sequelize: Sequelize
    })