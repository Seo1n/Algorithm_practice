function solution(arr, queries) {
    let result = []
        queries.reduce((_, [s,e,k]) => {
            let min = Infinity;
        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < min) {
                min = arr[i]
            }
        }
         min === Infinity ? result.push(-1) : result.push(min)
    }, [])
    return result
}