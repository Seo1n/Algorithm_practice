function solution(a, b) {
    let one = a.toString() + b.toString();
    let two = b.toString() + a.toString();
    if (two > one) {
        return Number(two);
    } else {
        return Number(one);
    }
}