function solution(intStrs, k, s, l) {
    return intStrs.reduce((result, i) => {
        let str = i.slice(s, s + l);
        if (Number(str) > k) {
            result.push(Number(str));
        }
        return result;
    }, []);
}