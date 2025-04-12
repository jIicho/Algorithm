function solution(my_string, is_prefix) {
  let prefixArr = [];
  for (let i = 0; i < my_string.length; i++) {
    prefixArr.push(my_string.slice(0, i));
  }

  return prefixArr.includes(is_prefix) ? 1 : 0;
}

console.log(solution("banana", "ban")); // 1
console.log(solution("banana", "nan")); // 0
console.log(solution("banana", "abcd")); // 0
console.log(solution("banana", "bananan")); // 0
