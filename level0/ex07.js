function solution(a, b, c, d) {
  //{주사위값 : 갯수}로 정리
  const dice = [a, b, c, d].reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  // 주사위 value 순으로 정렬
  const sortValue = Object.keys(dice).sort((a, b) => dice[b] - dice[a]);

  //주사위값이 4개가 같은 경우
  if (dice[sortValue[0]] === 4) return Number(sortValue[0]) * 1111;

  //세개가 같고 하나가 다른 경우
  if (dice[sortValue[0]] === 3)
    return Math.pow(Number(sortValue[0]) * 10 + Number(sortValue[1]), 2);

  //두개씩 같고 다른 경우
  if (dice[sortValue[0]] === 2 && dice[sortValue[1]] === 2)
    return (
      (Number(sortValue[0]) + Number(sortValue[1])) *
      Math.abs(Number(sortValue[0]) - Number(sortValue[1]))
    );

  //두개만 같고 나머지가 다른 경우
  if (dice[sortValue[0]] === 2)
    return Number(sortValue[1]) * Number(sortValue[2]);

  //모두 다른 경우 가장 작은 key값을 리턴
  return Number(sortValue[0]);
}

console.log(solution(2, 2, 2, 2));
console.log(solution(4, 1, 4, 4));
console.log(solution(6, 3, 3, 6));
console.log(solution(2, 5, 2, 6));
console.log(solution(6, 4, 2, 5));
