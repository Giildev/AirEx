const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./src/config/passport');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

//DATA BASE CONNECTION
// DB connection
const MONGO_URL = "mongodb://localhost/airexdb";
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);

mongoose.connection.on('error', (err) => {
    throw err; 
    process.exit(1);
})


app.use(session({
    secret: 'djhxcvxfgshjfgjhgsjhfgakjeauytsdfy', // a secret key you can write your own 
    resave: true,
    saveUninitialized: true, 
    store: new MongoStore({
        url:MONGO_URL,
        autoReconnect:true
    })
  }));

// DB connection end
/*
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/airexdb'); // connect to our database
*/

var Coin = require('./src/models/coin');
var User = require('./src/models/user');
var Trade = require('./src/models/trade');

//----------------------------- Login , Logout and Register
/*
const userController = require('./src/controller/user');

app.post('/signup',userController.postSignup);
app.post('/login',userController.postLogin);
app.get('logout', passportConfig.estaAutenticado ,userController.logout);
app.get('/usuarioInfo', passportConfig.estaAutenticado, (req, res) => {
    res.json(req.user);
})
*/
// ROUTES FOR OUR API

const router = express.Router();

// middleware
router.use(function(req, res, next) {
  console.log("Something is happening.");
  next(); // make sure we go to the next routes and don't stop here
});


router.get('/', function(req, res) {
    //req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1: 1;  
    //res.send(`Hola! has visto esta pagina: ${req.session.cuenta}`);
    res.json({ message: 'hooray! welcome to our api!' });
});
/*   
*/
// more routes for our API will happen here

//----------------------------- Login , Logout and Register
const userController = require('./src/controller/user');

router.post('/signup',userController.postSignup);
router.post('/login',userController.postLogin);
router.post('/logout:user_id', passportConfig.estaAutenticado ,userController.logout);
router.get('/usuarioInfo', passportConfig.estaAutenticado, (req, res) => {
    res.json(req.user);
})

//-------------------------- Crud Coins
//Coins Routes API
router.route('/coins')

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
//Trade Routes API
router.route('/trades')

        res.json({ message: "Successfully deleted" });
      }
    );
  });
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

    router.get('/trades/actives',function(req, res) {
        Trade.find({status: 'active'},function(err, trades) {
            if (err)
                res.send(err);

            res.json(trades);
        });
    })

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
app.use("/api", router);

//require('./src/routes/index')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
