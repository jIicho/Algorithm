function solution1(my_string, queries) {
  var answer = my_string.split("");
  let result = "";
  for (let x of queries) {
    let num = x[1] - x[0];
    result = answer.slice(x[0], x[1] + 1).reverse();

    answer.splice(x[0], num + 1);
    answer.splice(x[0], 0, ...result);
  }
  return answer.join("");
}

// 다른 풀이

function solution2(my_string, queries) {
  let answer = "";
  let my_stringArr = my_string.split("");
  queries.forEach((numArr) => {
    let result = my_stringArr.slice(numArr[0], numArr[1] + 1).reverse();
    my_stringArr.splice(numArr[0], numArr[1] - numArr[0] + 1);
    my_stringArr.splice(numArr[0], 0, ...result);
  });
  answer = my_stringArr.join("");
  return answer;
}

console.log(
  solution1("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
console.log(
  solution2("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
);
