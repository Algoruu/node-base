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
db.set(1, youtuber1) 
db.set(2, youtuber2)
db.set(3, youtuber3)

// REST API 설계
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