function solution(a, b, c) {
    let ans = 0;
    let sum = a + b + c
    let square = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2) 
    let tt = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3) 
    
    if (a === b && b === c) {
        ans += sum * square * tt
    } else {
        if (a !== b && b !== c && c!== a) {
            ans += sum
        } else {
            ans += sum * square
        }
    }
    return ans;
}