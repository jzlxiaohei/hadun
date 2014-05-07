var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var StudentSchema = new Schema({
    stuName: {
        type: String,
    },
    password: {
        type: String
    },
    createAt: {
        type: Date
    },
    updateAt: {
        type: Date,
        default: Date.now
    },
    //like qq,mobile and so on;
    extraInfo: {
        type: Schema.Types.Mixed
    }
})