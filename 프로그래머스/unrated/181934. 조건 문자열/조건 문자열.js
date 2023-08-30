function solution(ineq, eq, n, m) {
    let ans = 0
    if (ineq === ">") {
        eq === "=" ? ans = n >= m : ans = n > m
    } else {
        eq === "=" ? ans = n <= m : ans = n < m
    }
    return ans === true ? 1 : 0
}