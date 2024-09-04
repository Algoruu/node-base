const express = require('express')
const app = express()
const port = 1234

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())//미들웨어(http 외 모듈) 사용
// express.json -> express 모듈 중 하나. json이라는 미들웨어를 사용하면
// request로 날아오는 body값을 json으로 읽어볼 수 있음!
app.post('/test', (req, res) => {
  //body에 숨겨져서 들어온 데이터를 화면에 나타내줄 수 있음!
  console.log(req.body.message)

  res.json(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})