express = require("express")
cryptoSocket = require("crypto-socket")
cryptoSocket.start();

app = express();

app.listen(8001, function(){
    console.log("Server Running at Port 8000");
});


// listen to ETHBTC on bitfinex,bitmex,and cex.
cryptoSocket.start("bitfinex","ETHBTC")
cryptoSocket.start("bitmex","ETHBTC")
cryptoSocket.start("cex","ETHBTC")

cryptoSocket.start("bitfinex",['LTCBTC','BTCUSD'])


// print out quotes every 1000 ms (1 second)
// setInterval(
//     function(){
//         cryptoSocket.echoExchange()
//     },1000);

 
// get bitfinex quotes
results = cryptoSocket.Exchanges['bitfinex'];
// renders '{ ETHBTC: 0.02492 }' to console.

// const router = express.Router();

// /* Log-in and index page */
// router.get('/index', (req, res) => {
//   res.render('index', {
//     title: 'Login'
//   });
// });

// /* Crypto-watcher */
// router.get('/watcher', (req, res) => {
//   res.render('watcher', {
//     watcher: 'Watcher'
//   })
// })


app.get('/login', function(req, res){
    res.render('index', {
        title:'Login'
    });
});

app.get('/watcher', function(req, res){
    res.render('watcher', {
        title:'Watcher',
        feeds:results
    });
});

