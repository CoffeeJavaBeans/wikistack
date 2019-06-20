let express = require('express');
let app = express();
let morgan = require('morgan');
let PORT = 1337;

app.use(express.static('public'));

app.use(morgan('dev'));
app.use(express.json()); //need this to send json

module.exports = app;

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`Listing on port ${PORT}`);
});
