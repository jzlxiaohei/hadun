var path = require(path);
var rootPath = path.normalize(__dirname + '/..');

module.exports = {
    development: {
        db: 'mongodb://localhost:27017/test',
        root: rootPath,
        app: {
            name: 'hadun online test v1.0'
        }
    },
    production: {}
}