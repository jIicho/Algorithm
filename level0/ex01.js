function solution(arr, queries) {
  var answer = arr;
  queries.forEach((query) => {
    let [start, end, k] = query;
    for (let i = start; i <= end; i++) {
      if (i % k === 0) arr[i] += 1;
    }
  });
  return answer;
}
