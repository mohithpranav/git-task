var array = [1, 2, 3, 4, 4, 5];

let mySet = new Set([]);

for (let arr of array) {
  mySet.add(arr);
}
console.log(mySet);

var values = [];
// var has = false;

for (let arr of array) {
  if (values.includes(arr)) {
    continue;
  } else values.push(arr);
}

console.log(values);
