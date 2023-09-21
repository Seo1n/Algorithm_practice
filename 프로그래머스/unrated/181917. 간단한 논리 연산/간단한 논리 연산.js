function solution(x1, x2, x3, x4) {
    let num1 = x1 || x2 === true ? true : false
    let num2 = x3 || x4 === true ? true : false
    return num1 && num2 === true ? true : false
}