function solution(code) {
    let ans = '';
    let cnt = 0
    for (let i = 0; i < code.length; i++) {
       if (code[i] === '1') {
           cnt = cnt === 1 ? 0 : 1
    } else {
         if (i % 2 === 0 && cnt === 0) {
            ans += code[i]
        } else if (i % 2 !== 0 && cnt === 1) {
            ans += code[i]
        }
    }
    }
    return ans.length !== 0 ? ans : "EMPTY";
}