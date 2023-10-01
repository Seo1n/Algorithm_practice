function solution(my_string, queries) {
     return queries.reduce((result, [s, e]) => {
       result = result.slice(0, s) + result.slice(s, e + 1).split('').reverse().join('') + result.slice(e + 1)
         return result
     }, my_string)
}