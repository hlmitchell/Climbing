const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(__dirname +'./../'));

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on 3000...');
})