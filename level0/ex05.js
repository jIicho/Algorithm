function solution1(arr) {
  let stk = [];
  for (let i = 0; i < arr.length; i++) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
      i--;
    }
  }
  return stk;
}

//// 다른 방식
function solution2(arr) {
  let stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
    } else if (stk[stk.length - 1] >= arr[i]) {
      stk.pop();
      i--;
    }
    i++;
  }
  return stk;
}

console.log(solution1([1, 4, 2, 5, 3]));
console.log(solution2([1, 4, 2, 5, 3]));
