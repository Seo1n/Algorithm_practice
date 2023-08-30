function solution(n) {
    let ans = 0
   if (n % 2 !== 0) {
       for (let i = 0; i <= n; i++) {
           i % 2 !== 0 ? ans += i : ans
       }
   } else {
       for (let i = 0; i <= n; i++) {
           i % 2 === 0 ? ans += Math.pow(i, 2) : ans
       }
   }
       return ans
}