function solution(my_string, n) {
  let answer = "";
  answer = my_string.slice(-n);
  return answer;
}

console.log(solution("ProgrammerS123", 11));
console.log(solution("He110W0r1d", 5));
