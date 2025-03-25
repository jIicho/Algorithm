function solution(l, r) {
  let answer = [];
  for (let i = l; i <= r; i++) {
    if (
      i
        .toString()
        .split("")
        .every((num) => num === "0" || num === "5")
    ) {
      answer.push(i);
    }
  }
  if (answer.length === 0) answer.push(-1);
  return answer;
}
