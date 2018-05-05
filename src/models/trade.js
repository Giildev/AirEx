var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TradeSchema   = new Schema({
    userTrader:{
        type: String,
        required: [true]
    },
    tradeType:{ 
        type: String,
        enum : ['buy','sell'],
        default: 'buy'
    }, 
    coinToChange: String,
    coinToRecive: String,
    mount: Number,
    userTrading:{
        type: String,
        required: [true, 'userTrading is required']
    },
    status: { 
        type: String,
        enum : ['active','finish'],
        default: 'active'
    },
    description: String
});

module.exports = mongoose.model('Trade', TradeSchema);