const express = require('express');
const app = express();

app.use(express.static(__dirname +'./../'));

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log('Listening on 3000...');
})