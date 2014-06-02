module.exports =function(env){
    if(env==='development') {
        return {
            host: 'localhost',
            port: 3306,
            database: 'h_test',
            username: 'root',
            password: '123456',
            dialect: 'mysql'
        }
    }else{
        //TODO
    }
}