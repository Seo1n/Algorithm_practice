function solution(my_string, index_list) {
    let result = []
    index_list.reduce((_, i) => {
    result.push(my_string[i])
    } 
 , 0)
    return result.join("")
}