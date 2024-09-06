// express 모듈 셋팅
const express = require('express')
const app = express()
app.listen(1234)


//데이터 셋팅

// 채널 주소 : https://www.youtube.com/@NewJeans_official
// 채널 주소 : https://www.youtube.com/@TheWeeknd
// 채널 주소 : https://www.youtube.com/@user-vo8xp1kh1u
let youtuber1 = {
    channelTitle : "NewJeans",
    sub : "764만명",
    videoNum: "629개"
}

let youtuber2 = {
    channelTitle : "TheWeeknd",
    sub : "3560만명",
    videoNum: "176개"
}

let youtuber3 = {
    channelTitle : "안녕나강주",    
    sub : "5.48천명",
    videoNum: "289개"
}

let db = new Map()
let id = 1 //var는 사용하지 않을 것!

db.set(id++, youtuber1) //key - value쌍 = json과 비슷!
db.set(id++, youtuber2)
db.set(id++, youtuber3)

// REST API 설계
app.get('/youtubers', function (req, res) {
    //req:X
    // db.forEach(function(youtuber) {
    //     console.log(youtuber)
    // })
    var youtubers = {}

    if (db.size !== 0) {
        db.forEach( function (value, key){
            youtubers[key] = value
        });
    
        res.json(youtubers)
    } else {
        res.status(404).json({
            message : "죄송합니다. 조회할 유튜버가 없습니다."
        })
    }

})

app.get('/youtubers/:id', function (req, res) {
    let {id} = req.params
    //params는 항상 문자열! 따라서 parseInt로 감싸주기
    id = parseInt(id)
    const youtuber = db.get(id)
    if (youtuber == undefined) {
        res.status(404).json({
            message : "죄송합니다. 유튜버 정보를 찾을 수 없습니다."
        })
    } else {
        res.json(youtuber)
    }
})

app.use(express.json())//미들웨어(http 외 모듈) json 설정
// express.json -> express 모듈 중 하나. json이라는 미들웨어를 사용하면
// request로 날아오는 body값을 json으로 읽어볼 수 있음!
app.post('/youtubers', (req, res) => {
    const channelTitle = req.body.channelTitle
    if (channelTitle) {
        // 등록?  Map(db)에 저장(PUT) 해줘야함
        db.set(id++, req.body)

        res.status(201).json({
            message : `${db.get(id-1).channelTitle}님, 유튜브 채널 생성을 축하합니다!`
            // request.body에서 그대로 channelTitle 값을 가져오거나
            // db에서 저장이 잘 됐나 확인 겸 값 꺼내기
            //여기선 db에서 값 가져옴!
        })
    } else {
        res.status(400).json({
            message : "죄송합니다. 요청 값을 처리하지 못했습니다. 올바른 값을 보내주세요!"
        })
    }
}) 

app.delete('/youtubers/:id', function(req, res) {
    let {id} = req.params
    //params는 항상 문자열! 따라서 parseInt로 감싸주기
    id = parseInt(id)
    let youtuber = db.get(id)

    if (youtuber) {
        const channelTitle = youtuber.channelTitle
        db.delete(id)
            
        res.json({
            message : `${channelTitle}님, 정말 아쉽지만 다음에 또 뵙길 기대하겠습니다!`
        })
    } else {
        res.status(404).json({
            message : `죄송합니다. 요청하신 ${id}님은 가입된 유튜버가 아닙니다.`
        })
    }
})

app.delete('/youtubers', function(req, res) {
    // db에 값이 1개 이상이면, 전체 삭제
    if (db.size >= 1) {
        db.clear()

        res.json({
            message : "전체 유튜버 삭제가 완료됐습니다."
        })

    } else { // 값이 없으면, '죄송하지만 삭제할 유튜버가 존재하지 않습니다.'
        res.status(404).json({
            message : "죄송하지만 삭제할 유튜버가 존재하지 않습니다."
        })
    }


})

app.put('/youtubers/:id', function(req, res) {
    let {id} = req.params
    //params는 항상 문자열! 따라서 parseInt로 감싸주기
    id = parseInt(id)
    let youtuber = db.get(id)
    let oldTitle = youtuber.channelTitle

    if (youtuber == undefined) {
        res.status(404).json({
            message : `죄송합니다. 요청하신 ${id}님은 가입된 유튜버가 아닙니다.`
        })
    } else {
        let newTitle = req.body.channelTitle

        youtuber.channelTitle = newTitle
        db.set(id, youtuber)
            
        res.json({
            message : `${oldTitle}님, 채널명이 ${newTitle})(으)로 변경 완료되었습니다.`
           })
    }
})