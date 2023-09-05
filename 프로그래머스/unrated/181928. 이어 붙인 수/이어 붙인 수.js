function solution(num_list) {
    let odd = ""
    let even = ""
    num_list.forEach(function(num) {
         if (num % 2 === 0) {
            even += num.toString(); 
        } else {
            odd += num.toString();
        }
    })
    return Number(odd) + Number(even)
}