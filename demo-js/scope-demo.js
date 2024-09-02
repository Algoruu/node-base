if (true) {
    var num1 = 7;
    const num2 = 3; // 블록 {} 스코프. 선언된 {}밖에서 사용 불가능
    let num3 = 5; // 블록 {} 스코프. 선언된 {}밖에서 사용 불가능

    // num2 = 10;
    num3 = 21;

    console.log(num1 + " X " + num2 + " = " + num3);
    //2015년 이후 자바스크립트에는 + 연산은 지양됨
    console.log(`${num1} X ${num2} = ${num3}`);
    //템플릿 문자열 지향하기

}

console.log(num1)
// console.log(num2)
// console.log(num3)