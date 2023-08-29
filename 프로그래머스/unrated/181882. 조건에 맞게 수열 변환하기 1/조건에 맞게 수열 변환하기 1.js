function solution(arr) {
    const ans = []
    for (let i = 0; i < arr.length; i++) {
        let val;
      if (arr[i] >= 50 && arr[i] % 2 === 0) {
          val = arr[i] / 2
      } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
          val = arr[i] * 2
      } else {
          val = arr[i]
      }
       ans.push(val)
    }
    return ans; 
}