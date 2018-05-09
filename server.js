const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const Coin = require("./models/coin");
const User = require("./models/user");
const Trade = require("./models/trade");
const cors = require("cors");
const bcrypt = require("bcrypt-nodejs");
const router = express.Router();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", router);

// DB connection
const MONGO_URL = "mongodb://localhost/airexdb";
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on("error", err => {
  throw err;
  process.exit(1);
});

// Auth
router.post("/signup", (req, res) => {
  const user = new User();

  const encrypt = bcrypt.hashSync(req.body.password);

  user.name = req.body.name;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  user.phone = req.body.phone;
  user.password = encrypt;

  user.save(err => {
    if (err) res.send(err);
    res.send({ message: "User created!", user });
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const query = User.findOne({ email: email });
  query.select("email password");
  query.exec((err, user) => {
    // if (!user) {
    const decrypt = bcrypt.compareSync(password, user.password);
    console.log("input = ", password);
    console.log("db = ", user.password);
    console.log("decrypt =", decrypt);
    // if (decrypt) {
    //   const credentials = {
    //     email: email,
    //     password: user.password,
    //     role: user.role
    //   };
    //   res.send(JSON.stringify(credentials));
    //   console.log("Log in Success");
    // } else {
    //   console.log("Incorrect password!");
    // }
    // } else {
    //   console.log("This user doesn't exists");
    // }
  });
});

router.post("/logout", (req, res) => {
  console.log("object");
});

// Coin
router.get("/coin", (req, res) => {
  Coin.find((err, coins) => {
    if (!err) {
      res.send(coins);
    } else {
      res.send(err);
    }
  });
});

router.put("/coin/:id", (req, res) => {
  Coin.findById(req.params.id, (err, coin) => {
    if (!err) {
      coin.name = req.body.name; // update the coins info
      coin.imgUrl = req.body.imgUrl; // update the coins info
      if (!coin.name || coin.name.length < 1) {
        return res
          .status(400)
          .end('"name" is not valid. you must enter a valid name');
      }
      coin.save(err => {
        if (err) res.send(err);
        res.json({ message: "Coin updated!" });
      });
    } else {
      res.send(err);
    }
  });
});

// Trades
router.get("/trades", (req, res) => {
  Trade.find((err, trades) => {
    if (err) res.send(err);
    res.json(trades);
  });
});

router.post("/trades", (req, res) => {
  const trade = new Trade();
  trade.userTrader = req.body.userTrader;
  trade.tradeType = req.body.tradeType;
  trade.coinToChange = req.body.coinToChange;
  trade.amount = req.body.amount;
  trade.coinToRecive = req.body.coinToRecive;
  trade.userTrading = req.body.userTrading;
  trade.status = req.body.status;
  trade.description = req.body.description;

  trade.save(err => {
    if (err) res.send(err);
    res.send({ message: "Trade created!", trade });
  });
});

router.get("/trades/actives", (req, res) => {
  Trade.find({ status: "active" }, (err, trades) => {
    if (err) res.send(err);
    res.json(trades);
  });
});

router.get("/trade/detail/:trade_id", (req, res) => {
  Trade.findById(req.params.trade_id, (err, trade) => {
    if (err) res.send(err);
    res.json(trade);
  });
});

router.get("/trade/confirm/:trade_id", (req, res) => {
  Trade.findById(req.params.trade_id, (err, trade) => {
    if (err) res.send(err);
    trade.status = "finish";
    trade.save(function(err) {
      if (err) res.send(err);
      res.json({ message: "Trade Success", trade });
    });
  });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
