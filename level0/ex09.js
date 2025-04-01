function solution(number) {
  let answer = 0;
  let total = 0;
  number.split("").forEach((numStr) => (total += Number(numStr)));
  answer = total % 9;
  return answer;
}

console.log(solution("123"));
console.log(solution("78720646226947352489"));
