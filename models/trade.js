var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TradeSchema = new Schema({
  userTrader: {
    // User Creating new Trade
    type: String,
    required: [true]
  },
  tradeType: {
    type: String,
    default: "buy"
  },
  coinToChange: { type: String, required: true },
  coinToRecive: { type: String, default: "dolar" },
  amount: Number,
  userTrading: {
    // User accepting trade
    type: String
  },
  status: {
    type: String,
    enum: ["active", "finish"],
    default: "active"
  },
  description: String
});

module.exports = mongoose.model("Trade", TradeSchema);
