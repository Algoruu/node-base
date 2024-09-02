const express = require('express')
const app = express()

app.listen(1234)


app.get('/:id', function(req, res) {
    let {id} = req.params
    id = parseInt(id) //"숫자" => 숫자
    //console.log(db.get(id)) //Map에 넣어둔 값이 없으면 undefined

    if (db.get(id) == undefined) {
        res.json({
            message : "없는 항목입니다."
        })

    }else {
        res.json({
            id : id,
            productName : db.get(id)
        })
    }
})
// localhost:1234/1 => NoteBook
// localhost:1234/1 => Cup
// localhost:1234/1 => Chair

//하나의 객체로 생성!
let db = new Map() //db 대신 사용할거임
db.set(1, "NoteBook") // 키로 밸류를 찾을 수 있는 한 쌍을 저장함
db.set(2, "Cup")
db.set(3, "Chair")
db.set("1", "KimNanYoung")

// console.log(db)
// console.log(db.get(1))
// console.log(db.get("1"))
// console.log(db.get(2))
// console.log(db.get(3))