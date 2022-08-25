// 1
const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
function removeDuplicates(array) {
return array.filter((item,
index) => array.indexOf(item) === index);
}

console.log(removeDuplicates(array));

// 2
const firstArray = [2, 2, 4, 1];
const secondArray = [1, 2, 0, 2];
const commonArray = firstArray.filter(value => secondArray.includes(value));
console.log(commonArray);

// 3

const arr = [0, 1, null, 2, , 3, undefined, 3,,,,,, 4,, 4,, 5,, 6,,,,]
const results = arr.filter(element => {
  return element !== null && element !== undefined;
});

console.log(results);
