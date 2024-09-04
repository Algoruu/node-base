
function add1(x, y) {
    return x + y
}//기본

let add2 = function(x,y) {
    return x + y
} //모듈화

const add3 = (x,y) => {
    return x + y
} //function의 역할을 하는 =>(화살표 함수 arrow function)

var add4 = (x,y) => x + y
//매우 축약된 형태


console.log(add1(1,2))
console.log(add2(1,2))
console.log(add3(1,2))
console.log(add4(1,2))