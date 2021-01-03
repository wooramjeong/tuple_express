'use strict';

const express = require('express');
const bodyParser = require('body-parser')
// 상수
const PORT = 3000;
const HOST = '0.0.0.0';

// 앱
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
  console.log('__dirname : ' + __dirname);
});

app.post('/', (req, res) => {
  
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send("결과 : " + result);
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
