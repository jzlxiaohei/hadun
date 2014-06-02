module.exports = function(env){
    if(env ==='development'){
        return {
            port:3000,
            configPath:__dirname
        }
    }
}