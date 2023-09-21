function solution(n) {
    let result = []
    while (n > 0) {
        result.push(n)
        if (n === 1) {
            break;
        }
        n % 2 === 0 ? n = n / 2 : n = 3 * n + 1
    }
    return result
}