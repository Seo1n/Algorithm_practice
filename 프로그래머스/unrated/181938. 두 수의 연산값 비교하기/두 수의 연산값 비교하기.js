

function solution(a, b) {
    let max = Math.max(`${a}${b}`)
    let mul = a * b * 2
    if (max < mul) {
        return mul;
    } else {
        return max
    }

}

