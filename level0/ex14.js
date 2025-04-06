function solution1(my_string) {
  var answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.slice(i, my_string.length + 1));
  }
  answer.sort();
  return answer;
}
// 다른 풀이
function solution2(my_string) {
  return Array.from(my_string)
    .map((_, i) => my_string.substring(i))
    .sort();
}

console.log(solution1("banana"));
console.log(solution1("programmers"));

console.log(solution2("banana"));
console.log(solution2("programmers"));
