const obj1 = {}
const obj2 = { message : "값이 있습니다" }
const num = 1
const str1 = "one"
const str2 = "" // 문자열도 객체임!

console.log(isEmpty(obj1)) // 배열 길이는 0 (length === 0)
console.log(isEmpty(obj2)) // 배열 길이는 1 (length === 1)

// console.log(Object.keys(num).length === 0) // true 값이 출력되는데 잘못됨
console.log(isEmpty(str1)) 
console.log(isEmpty(str2)) 

function isEmpty(obj) { // 이 함수를 모듈처럼 사용해보기~
    if (obj.constructor === Object) //객체인지 확인하기
    if (Object.keys(obj).length === 0) {
        return true
    } else {
        return false
    }
}

// typeof로 문자열 체크도 고려할 것
// function isEmpty(obj) {
//     if (typeof obj === "object" && obj.constructor === Object) {
//         return Object.keys(obj).length === 0;
//     } else if (typeof obj === "string") {
//         return obj.length === 0;
//     }
//     return false;
// }
