function solution(players, callings) {
  var answer = players;
  // 해결 1)
  // for (let i = 0; i < callings.length; i++) {
  //   let order = answer.indexOf(callings[i]);
  //   let item = answer[order];
  //   answer[order] = answer[order - 1];
  //   answer[order - 1] = item;
  // }

  // 해결 2)
  for (let i = 0; i < callings.length; i++) {
    let order = answer.indexOf(callings[i]); // order = 3
    let item = answer[order]; // kai
    answer.splice(order, 1, answer[order - 1]);
    answer.splice(order - 1, 1, item);
  }

  return answer;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
);
