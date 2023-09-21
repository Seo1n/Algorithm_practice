function solution(l, r) {
    let result = []
    for (let i = l; i <= r; i++) {
        let num = i.toString().replace(/[05]/g, "")
        if (num.length === 0) {
            result.push(i)
        }
    }
        return result.length === 0 ? [-1] : result
}