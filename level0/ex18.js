function solution(my_string, s, e) {
  let answer = "";
  const reverseStr = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");
  answer = my_string.slice(0, s) + reverseStr + my_string.slice(e + 1);
  return answer;
}

console.log(solution("Progra21Sremm3", 6, 12));
