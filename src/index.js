const rp = require('request-promise');
const DEFAULT_DATE = '2019-04-10';

exports.btc = async (req, res) => {
  const date = req.query.date || DEFAULT_DATE;
  async function getBTC(date) {
    const res = await rp(`https://api.coinbase.com/v2/prices/BTC-USD/spot?date=${date}`, {
      headers: {
        'CB-VERSION': '2016-10-10',
        Authorization: `Bearer ${process.env.COINBASE_TOKEN}`
      }
    });
    return res;
  }
  const btc = await getBTC(date);
  res.send(btc);
};
