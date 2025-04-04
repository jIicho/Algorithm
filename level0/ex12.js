function solution(my_strings, parts) {
  let answer = "";
  my_strings.forEach((str, index) => {
    answer += str.slice(parts[index][0], parts[index][1] + 1);
  });
  return answer;
}

console.log(
  solution(
    ["progressive", "hamburger", "hammer", "ahocorasick"],
    [
      [0, 4],
      [1, 2],
      [3, 5],
      [7, 7],
    ]
  )
);
