var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CoinSchema   = new Schema({
    name: String,
    imgUrl: String
});

module.exports = mongoose.model('Coin', CoinSchema);