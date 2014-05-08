var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ansOpts = 'A B C D E F'.split(' ');

var ChoiceSchema = new Schema({
    content: {
        type: String
    },
    options: {
        type: [String]
    },
    picUrl: {
        type: String
    },
    answer: {
        type: String,
        enum: ansOpts
    },
    category: {

    }
});