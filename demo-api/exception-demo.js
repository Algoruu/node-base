const express = require('express')
const app = express()
app.listen(1234)

const fruits = [
    { id : 1, name : 'apple'},
    { id : 2, name : 'orange'},
    { id : 3, name : 'strawberry'},
    { id : 4, name : 'blueberry'}
]

//과일 전체 조회
app.get('/fruits', ( req, res)=> {
    res.json(fruits) //json array
})

//과일 개별 조회
app.get('/fruits/:id', ( req, res)=> {
    let id = req.params.id
    // let fruit = fruits[id-1]
    var findFruit = 
        fruits.find(f => f.id == id)
        // fruits 배열 안에 있는 객체 중, id 값이 params.id와 같은 객체를 찾겠다는 뜻!

    if(findFruit)
        res.json(findFruit)
    else // 예외를 터트린다 = HTTP Status Code성공 X 실패라는 뜻!!!
        res.status(404).json(
            "죄송합니다. 전달해주신 id로 저장된 과일이 없습니다."
        )
})

