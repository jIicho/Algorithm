function solution(my_string, is_suffix) {
  let answer = 0;
  let suffix = [];
  for (let i = 0; i < my_string.length; i++) {
    suffix.push(my_string.slice(i, my_string.length + 1));
  }
  if (!suffix.includes(is_suffix)) answer = 0;
  else answer = 1;
  return answer;
}

console.log(solution("banana", "ana"));
console.log(solution("banana", "nan"));
console.log(solution("banana", "wxyz"));
console.log(solution("banana", "abanana"));
