function solution1(my_string, index_list) {
  let answer = "";
  index_list.forEach((num) => (answer += my_string[num]));
  return answer;
}

// 다른 풀이
function solution2(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}

console.log(
  solution1("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
console.log(solution1("zpiaz", [1, 2, 0, 0, 3]));
console.log("---");
console.log(
  solution2("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
console.log(solution2("zpiaz", [1, 2, 0, 0, 3]));
