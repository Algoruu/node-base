
// map 함수 (메소드) VS forEach 차이
/*
배열에 쓰려고 나옴!
*/
const arr = [1, 2, 3, 4, 5]

//콜백함수가 하는 일!!
//객체(또는 배열)에서 요소를 하나 꺼낸 다음, 
//매개변수로 그 요소를 전달하여 호출되는 콜백함수!!
const foreachArr = arr.forEach(function(a, b, c) {
                    //매개변수 순서 : 데이터, 인덱스, 객체 전체 출력
    return a * 2

})
console.log(`forEach문`)
console.log(arr)

const mapArr = arr.map(function(a, b, c) {
                    //매개변수 순서 : 데이터, 인덱스, 객체 전체 출력 
    return a * 2

})
console.log(`map 함수`)
console.log(arr)

console.log(`forEach로 return하면 ${foreachArr},
             map으로 return하면 ${mapArr}`)