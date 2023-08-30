function solution(a, d, included) {
    let ans = 0
    for (let i = 0; i < included.length; i++) {
       if (included[i] === true) {
           i === 0 ? ans += a : ans += a + d * i
       }
    }
    return ans;
}