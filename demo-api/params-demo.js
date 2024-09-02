const express = require('express')
const app = express()

app.listen(1234)

app.get('/products/:n', function (req, res) {
    // : -> 어? 나한테 URL로 매개변수를 전달해줄 건가봐!
    // req.params(일단은 params에 네가 말한 걸 다 담을겡)
    //products/__ 빈칸에 오는 값을 n이라는 변수에 담기
    // console.log(req.params)
    // console.log(req.params.n)
    let number = parseInt(req.params.n) - 10
    console.log(number) //숫자 "숫자"

    res.json({
        num : number
    })

})
    
// 영상 클릭 주소 : https://www.youtube.com/watch?v=MfO1FenJbKI
// 영상 클릭 주소 : https://www.youtube.com/watch?v=q2A43PzDIgA
// 영상 타임라인 주소 : https://www.youtube.com/watch?v=MfO1FenJbKI&t=110s
app.get('/watch', function(req, res) {

    // const q = req.query // q = {v : ___,t : ___ }
    // console.log(q.v) // 비구조화를 사용할 수 있음!
    // console.log(q.t) // 비구조화를 사용할 수 있음!

    // JS(JSON)객체의 비구조화  
    const {v, t} = req.query
    console.log(v)
    console.log(t)

    res.json({
        video : v,
        timeline: t
    })

    // res.json({
    //     video : q.v,
    //     timeline : q.t
    // })
})
