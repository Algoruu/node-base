var jwt = require('jsonwebtoken'); // jwt 모듈 소환
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);
// 서버 셋팅: 포트 넘버(번호)를 1234로 셋팅

// GET + "/jwt" : 토큰 발행
app.get('/jwt', function (req, res) {
  var token = jwt.sign({ foo: 'bar' }, process.env.PRIVATE_KEY);
  res.cookie("jwt", token, {
    httpOnly : true
  });
  res.send("토큰 발행 완료!");
});


// GET + "/jwt/decoded" : 토큰 검증
app.get('/jwt/decoded', function (req, res) {
  let receivedJwt = req.headers["authorization"]
  console.log("우리가 req로 전달받은 jwt : ", receivedJwt);
  var decoded = jwt.verify(receivedJwt, process.env.PRIVATE_KEY);
  res.send(decoded);
});