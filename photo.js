function solution(name, yearning, photo) {
  let answer = [];
  let info = {};
  for (let i = 0; i < name.length; i++) {
    info[name[i]] = yearning[i];
  }

  let accord;
  for (let i = 0; i < photo.length; i++) {
    accord = photo[i].filter((x) => name.includes(x));
    // console.log(i);
    // console.log(accord);
    // console.log("");

    let sum = 0;
    for (let i = 0; i < accord.length; i++) {
      //console.log(accord[i]);
      sum += info[accord[i]];
    }
    answer.push(sum);
  }

  console.log(info);

  return answer;
}

let nameArray = ["may", "kein", "kain", "radi"];
let yearningArray = [5, 10, 1, 3];
let photoArray = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];
console.log(solution(nameArray, yearningArray, photoArray));
