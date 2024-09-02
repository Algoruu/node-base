const express = require('express')
const app = express()

app.listen(1234)

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

app.get('/:nickname', function(req, res) {

    const {nickname} = req.params

    if (nickname =="@NewJeans_official") {
        res.json(youtuber1)
    } else if (nickname =="@TheWeeknd") {
        res.json(youtuber2)
    } else if (nickname =="@user-vo8xp1kh1u") {
        res.json(youtuber3)
    } else {
        res.json({
            message : "죄송합니다. 알 수 없는 유튜버 입니다."
        })
    }
    // 개발자가 예상하지 못한 에러 = 예외처리!!!!
})
