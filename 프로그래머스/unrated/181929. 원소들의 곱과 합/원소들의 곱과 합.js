function solution(num_list) {
    let result1 = 1; // 1로 초기화
    let result2 = 0;

    num_list.forEach(function(number) {
        result1 *= number;
        result2 += number; 
    });

    return result1 < result2 ** 2 ? 1 : 0;
}
