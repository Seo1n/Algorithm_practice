function solution(number) {
    let num = [...number]
    let ans = 0
    num.map((num) => ans += Number(num))
    return ans % 9
}