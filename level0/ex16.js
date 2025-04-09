function solution1(my_string, n) {
  return my_string.slice(0, n);
}

// 다른 풀이

function solution2(my_string, n) {
  return my_string.substring(0, n);
}

console.log(solution1("ProgrammerS123", 11));
console.log(solution1("He110W0r1d", 5));

console.log(solution2("ProgrammerS123", 11));
console.log(solution2("He110W0r1d", 5));
