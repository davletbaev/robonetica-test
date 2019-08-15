const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'build')));

app.post('/request', function (req, res) {
  console.log(req.body)
  return res.sendStatus(200);
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT)
});