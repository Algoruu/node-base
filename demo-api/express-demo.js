const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.listen(process.env.PORT)
// 서버 셋팅: 포트 넘버(번호)를 1234로 셋팅

// GET + "/"
app.get('/', function (req, res) {
  res.send('Hello World')
})

let nodejsBook = {
    title: "Node.js를 공부해보자.",
    price: 20000,
    description: "이 책 좋음 왜? OOO 지음"
  }

app.get('/products/1', function (req, res) {
    res.json(nodejsBook)
    //res.send(20000)

})
