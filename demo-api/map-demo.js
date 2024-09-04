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
        product = db.get(id)
        product["id"] = id // product.id = id
        // id는 뒤에 있어도 상관없음!!(순서는 중요X)
        // json 데이터를 전달받는 프론트엔드는 어차피 키값을 통해
        //  데이터를 찾아서 상관이 없다!
        res.json(product)
    }
})
// localhost:1234/1 => NoteBook
// localhost:1234/1 => Cup
// localhost:1234/1 => Chair

//하나의 객체로 생성!
let db = new Map() //db 대신 사용할거임

let notebook = {
    productName : "NoteBook",
    price : 2000000,
    description : "누군가 쓰던 엄청난 공책이다."
}

let cup = {
    productName : "Cup",
    price : 3000,
    description : "수제 옹기컵. 단돈 3000원에 모십니다!!!"
}

let chair = {
    productName : "Chair",
    price : 100000,
    description : "매우 탐나는 의자다. 옛날 유행했던 걸 재현함."
}

let poster = {
    productName : "Poster",
    price : 20000,
    description : "아니 이건 뉴진스? 당장 사야합니다."
}

db.set(1, notebook) // 키로 밸류를 찾을 수 있는 한 쌍을 저장함
db.set(2, cup)
db.set(3, chair)
db.set(4, poster)

// console.log(db)
// console.log(db.get(1))
// console.log(db.get("1"))
// console.log(db.get(2))
// console.log(db.get(3))