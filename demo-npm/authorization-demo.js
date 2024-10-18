var jwt = require('jsonwebtoken'); // jwt 모듈 소환
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT);
// 서버 셋팅: 포트 넘버(번호)를 1234로 셋팅

// GET + "/jwt" : 토큰 발행
app.get('/jwt', function (req, res) {
    const token = jwt.sign({
      username : "kim nanyoung"
  }, process.env.PRIVATE_KEY, {
      expiresIn: '1m',
      issuer: "admin"
  });

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

  // 유효기간이 지났어!!!
  // 500 에러(가 난다고 해서 서버가 꺼지지 않았지만)를 낼 게 아니고
  // 예외(개발자가 생각하지 못한 에러) 처리 필요!!
  // - 유효기간이 지난 토큰 => res.'로그인(인증) 세션(유지되는 상태)이 만료되었습니다. 다시 로그인 하세요.'

  
  res.send(decoded);
});