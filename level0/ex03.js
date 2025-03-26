function solution(start_num, end_num) {
  var answer = [];
  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }
  return answer;
}

function solution(start, end) {
  return Array(end - start + 1)
    .fill(start)
    .map((x, idx) => x + idx);
}
