import express from 'express';
import cryptoSocket from 'crypto-socket';
cryptoSocket.start();

cryptoSocket.start("bitfinex",['LTCBTC','BTCUSD'])

// print out quotes every 1000 ms (1 second)
setInterval(
  function(){
      cryptoSocket.echoExchange()
  },1000);

  // get bitfinex quotes
// console.log(cryptoSocket.Exchanges['bitfinex'])
var results = cryptoSocket.Exchanges['bitfinex'];
// renders '{ ETHBTC: 0.02492 }' to console.

const router = express.Router();

/* Log-in and index page */
router.get('/index', (req, res) => {
  res.render('index', {
    title: 'Login'
  });
});

/* Crypto-watcher */
router.get('/watcher', (req, res) => {
  res.render('watcher', {
    watcher: 'Watcher',
    feeds : results
  })
})


export default router;
