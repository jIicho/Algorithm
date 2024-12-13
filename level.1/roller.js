function solution(n, m, section) {
  var answer = 0;
  let painted = 0;
  for (let i = 0; i < section.length; i++) {
    if (painted >= section[i]) {
      continue;
    }
    painted = section[i] + m - 1;
    answer++;
  }
  return answer;
}

let ex1N = 8;
let ex1M = 4;
let ex1Section = [2, 3, 6];
/////////
let ex2N = 5;
let ex2M = 4;
let ex2Section = [1, 3];
/////////
let ex3N = 4;
let ex3M = 1;
let ex3Section = [1, 2, 3, 4];

console.log(solution(ex1N, ex1M, ex1Section));
console.log(solution(ex2N, ex2M, ex2Section));
console.log(solution(ex3N, ex3M, ex3Section));
