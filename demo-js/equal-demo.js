
// ==, ===의 차이

if (1 == "1") { //자료형은 상관없이, 값만 비교
    console.log("같습니다")
} else {
    console.log("같지 않습니다")
}

if (1 === "1") { // 자료형이 상관 있음!! 값도 상관 있음
    console.log("같습니다")
} else {
    console.log("같지 않습니다")
}