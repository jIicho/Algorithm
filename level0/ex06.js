// 문제 내에 있는 진리표 해석 결과
// || 과 && 와 관계가 있음을 확인

function solution1(x1, x2, x3, x4) {
  let answer = true;
  let first = x1 || x2;
  let second = x3 || x4;
  answer = first && second;

  return answer;
}

/// 다른 방식
function solution2(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}
console.log(solution1(false, true, true, true));
console.log(solution2(false, true, true, true));
