// async-awit : Promise 객체를 좀 더 쉽고 편하게 사용하는 문법
// 즉, 비동기 처리가 쉽다!!!

// await 함수
// await이.. Promise 객체.then() 이 메소드를 좀 더 쉽게 사용할 수 있는 방법

// async의 두 번째 기능
// Promise 객체가 일이 끝날 때까지 기다릴 수 있는 공간을 제공함!!
async function f() {

    // promise 객체 한 개당 => query 하나
    let promise1 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("첫 번째 쿼리"), 3000);
    });

    let result1 = await promise1;

    // promise 객체가 일을 다 할 때까지 기다려줌!!
    console.log(result1);

    // promise 객체 한 개당 => query 하나
    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("두 번째 쿼리with " + result1), 3000);
    });

    let result2 = await promise2;
    console.log(result2);

    // promise 객체 한 개당 => query 하나
    let promise3 = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("세 번째 쿼리with" + result2), 3000);
    });
    let result3 = await promise3;
    console.log(result3);
}

f();