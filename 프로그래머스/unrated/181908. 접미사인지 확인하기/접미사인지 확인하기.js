function solution(my_string, is_suffix) {
    let arr = []
         for (let i= 0; i < my_string.length; i++) {
            arr.push(my_string.slice(i))
    }
        for (i in arr) {
            if (arr[i] === is_suffix) {
                return 1
                break
            }
        }
    return 0
}