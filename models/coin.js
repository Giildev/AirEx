const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoinSchema = new Schema({
  name: String,
  imgUrl: String
});

module.exports = mongoose.model("Coin", CoinSchema);
