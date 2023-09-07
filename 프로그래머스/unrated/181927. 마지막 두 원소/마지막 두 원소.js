function solution(num_list) {
    a = num_list.at(-1)
    b = num_list.at(-2)
    a > b ? num_list.push(Number(a-b)) : num_list.push(Number(a * 2))
    return num_list
}