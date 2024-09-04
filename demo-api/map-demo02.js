const express = require('express')
const app = express()

app.listen(1234)

// GET + "/"
app.get('/', function (req, res) {
  res.send('Hello World')
})

// localhost:1234/1 => NoteBook
// localhost:1234/1 => Cup
// localhost:1234/1 => Chair

//하나의 객체로 생성!
let db = new Map() //db 대신 사용할거임
db.set(1, "NoteBook") // 키로 밸류를 찾을 수 있는 한 쌍을 저장함
db.set(2, "Cup")
db.set(3, "Chair")

// console.log(db)

// console.log(db.get(1))
// console.log(db.get(2))
// console.log(db.get(3))

app.get('/:n', function(req, res) {
    let number = parseInt(req.params.n) 

    if(number == 1){
        res.json(db.get(1))
    } else if (number == 2) {
        res.json(db.get(2))
    } else if (number == 3) {
        res.json(db.get(3))
    } else {
        res.json({
            message : "죄송합니다. 알 수 없는 항목입니다."
        })
    }
})