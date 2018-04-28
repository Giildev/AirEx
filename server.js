const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');



// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

//DATA BASE CONNECTION
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/airexdb'); // connect to our database

var Coin = require('./src/models/coin');
var Trade = require('./src/models/trade');

// ROUTES FOR OUR API

var router = express.Router();

// middleware 
router.use(function(req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
/*   
*/
// more routes for our API will happen here
//Coins Routes API
router.route('/coins')

    .post(function(req, res) {
      
        var coin = new Coin;
        coin.name = req.body.name;
        coin.imgUrl = req.body.imgUrl;

        if (!coin.name || coin.name.length < 2 ) {
            // name must be a string between 2 and 50
            return res.status(400).end('"name" is not valid. you must enter a valid name');
        }

        coin.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Coin created!' });
        });
    })

    
    .get(function(req, res) {
      Coin.find(function(err, coins) {
          if (err)
              res.send(err);

          res.json(coins);
      });
    });

    router.route('/coins/:coin_id')

    .put(function(req, res) {

      // use our bear model to find the bear we want
    Coin.findById(req.params.coin_id, function(err, coin) {

        if (err)
            res.send(err);

        coin.name = req.body.name;  // update the coins info
        coin.imgUrl = req.body.imgUrl;  // update the coins info
        
        if (!coin.name || coin.name.length < 1 ) {
            // name must be a string between 2 and 50
            return res.status(400).end('"name" is not valid. you must enter a valid name');
        }
        // save the coin
        coin.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Coin updated!' });
        });

      });
    })

    .delete(function(req, res) {
      Coin.remove({
          _id: req.params.coin_id
      }, function(err, bear) {
          if (err)
              res.send(err);

          res.json({ message: 'Successfully deleted' });
      });
    });

//Trade Routes API
router.route('/trades')

    .get(function(req, res) {
        Trade.find(function(err, trades) {
            if (err)
                res.send(err);

            res.json(trades);
        });
    })

    .post(function(req, res) {
      
        var trade = new Trade;
        trade.userTrader = req.body.userTrader;
        trade.tradeType = req.body.tradeType;
        trade.coinToChange = req.body.coinToChange;
        trade.mount = req.body.mount;
        trade.coinToRecive = req.body.coinToRecive;
        trade.userTrading = req.body.userTrading;
        trade.status = req.body.status;
        trade.description = req.body.description;

        trade.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'trade created!', trade });
        });

    });

    router.get('/trade/detail/:trade_id',function(req, res) {
        Trade.findById(req.params.trade_id, function(err, trade)  {
            if (err)
                res.send(err);
  
            res.json(trade);
        });
    });

    router.get('/trade/confirm/:trade_id', function(req, res) {
       
        Trade.findById(req.params.trade_id, function(err, trade) {

            if (err)
                res.send(err);
    
            trade.status = 'finish';

            trade.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'finishits trade successfully', trade });
            });
    
        });
    });

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);





//require('./src/routes/index')(app);


app.listen(port, () => console.log(`Listening on port ${port}`));

