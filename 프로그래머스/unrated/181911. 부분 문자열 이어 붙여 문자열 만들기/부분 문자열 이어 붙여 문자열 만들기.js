function solution(my_strings, parts) {
    return parts.reduce((result, [s,e], i) => {
        result += my_strings[i].slice(s, e + 1)
        return result
    }, [])
}