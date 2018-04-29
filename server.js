const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

//DATA BASE CONNECTION
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/airexdb"); // connect to our database

const Coin = require("./coin");

// ROUTES FOR OUR API

const router = express.Router();

// middleware
router.use(function(req, res, next) {
  console.log("Something is happening.");
  next(); // make sure we go to the next routes and don't stop here
});

router.get("/", function(req, res) {
  res.json({ message: "hooray! welcome to our api!" });
});
/*   
*/
// more routes for our API will happen here

router
  .route("/coins")
  .post(function(req, res) {
    console.log(req.body);
    const coin = new Coin();
    coin.name = req.body.name;
    coin.imgUrl = req.body.imgUrl;

    if (!coin.name || coin.name.length < 2) {
      // name must be a string between 2 and 50
      return res
        .status(400)
        .end('"name" is not valid. you must enter a valid name');
    }

    coin.save(function(err) {
      if (err) res.send(err);

      res.json({ message: "Coin created!" });
    });
  })

  .get(function(req, res) {
    Coin.find(function(err, coins) {
      if (err) res.send(err);

      res.json(coins);
    });
  });

router
  .route("/coins/:coin_id")

  .put(function(req, res) {
    // use our bear model to find the bear we want
    Coin.findById(req.params.coin_id, function(err, coin) {
      if (err) res.send(err);

      coin.name = req.body.name; // update the coins info
      coin.imgUrl = req.body.imgUrl; // update the coins info

      if (!coin.name || coin.name.length < 1) {
        // name must be a string between 2 and 50
        return res
          .status(400)
          .end('"name" is not valid. you must enter a valid name');
      }
      // save the coin
      coin.save(function(err) {
        if (err) res.send(err);
        res.json({ message: "Coin updated!" });
      });
    });
  })

  .delete(function(req, res) {
    Coin.remove(
      {
        _id: req.params.coin_id
      },
      function(err, bear) {
        if (err) res.send(err);

        res.json({ message: "Successfully deleted" });
      }
    );
  });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use("/api", router);

//require('./src/routes/index')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
