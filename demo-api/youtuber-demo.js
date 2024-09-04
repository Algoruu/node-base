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
var id = 1

db.set(id++, youtuber1) //key - value쌍 = json과 비슷!
db.set(id++, youtuber2)
db.set(id++, youtuber3)

// REST API 설계
app.get('/youtubers', function (req, res) {
    //req:X
    res.json({
        message : "test"
    })
})

app.get('/youtubers/:id', function (req, res) {
    let {id} = req.params
    //params는 항상 문자열! 따라서 parseInt로 감싸주기
    id = parseInt(id)
    const youtuber = db.get(id)
    if (youtuber == undefined) {
        res.json({
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
    // 등록?  Map(db)에 저장(PUT) 해줘야함
    db.set(id++, req.body)

    res.json({
        message : `${db.get(id-1).channelTitle}님, 유튜브 채널 생성을 축하합니다!`
        // request.body에서 그대로 channelTitle 값을 가져오거나
        // db에서 저장이 잘 됐나 확인 겸 값 꺼내기
        //여기선 db에서 값 가져옴!
    })
}) 