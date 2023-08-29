const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

// 분해합 N
const N = Number(input);

// 분해합이 N인 자연수들을 저장하기 위한 빈 배열
let result = [];

// 분해합보다 큰 생성자는 존재할 수가 없음
for(let i = 1; i <= N; i++){
  // 각 자릿수 숫자로 분해하기 위해서 문자열로 만들어줌
  let M = String(i);
  
  // 자연수 M의 각 자릿수를 추출
  // 연산을 위해 숫자형으로 변경해줌
  let digit = M.split("").map((x) => Number(x));
  
  let sum = 0;
  
  for(let j = 0; j < digit.length; j++){ 
    // 자연수 M의 각 자릿수의 합
    sum += digit[j];
  }
  
  // sum과 M을 더하여 자연수 M에 대한 분해합을 얻음
  // 위에서 M을 String으로 만들었으므로
  // 문자열 연결 연산이 되버릴 수 있으므로 Number로 변환해줌
  sum += Number(M);
  
  // sum이 N과 같으면
  // 자연수 M은 분해합 N의 생성자이므로 빈 배열에 넣음
  if(sum === N){
    result.push(M);
  }
}

// 만약 생성자가 없다면 result 배열의 길이는 0
if(result.length === 0){
  console.log(0);
} else {
  // 생성자 중 가장 작은 숫자를 출력
  console.log(Math.min(...result));
}