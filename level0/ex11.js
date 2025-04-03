function solution1(intStrs, k, s, l) {
  let answer = [];
  intStrs.forEach((numStr) => {
    let num = Number(numStr.substring(s, s + l));
    if (num > k) answer.push(num);
  });
  return answer;
}

// 다른 풀이
function solution2(intStrs, k, s, l) {
  return intStrs.reduce((bucket, intStr) => {
    const v = Number(intStr.slice(s, s + l));
    if (v > k) bucket.push(v);
    return bucket;
  }, []);
}

console.log(
  solution1(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
console.log(
  solution2(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
