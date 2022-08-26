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

// 4
const cricket = [{
  name: 'Sachin Tendulkar',
  nationality: 'India',
  retired: true
  }, {
  name: 'Shane Warne',
  nationality: 'Australia',
  retired: true
  }, {
  name: 'Virat Kohli',
  nationality: 'India',
  retired: false
  }];
  let retiredarray = [];
  for(let i=0; i<cricket.length; i++)
  {
    for(item in cricket[i])
    {
      if(cricket[i].retired == false)
      {
        retiredarray.push(cricket[i]);
      }
      break;
    }
  }
  console.log(retiredarray);

  // 6
  function findit(value, arr) {
    var status = 'The number does not exist in the array';

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        if (name == value) {
            status = 'The number exists in the array';
            break;
        }
    }

    return status;
}
console.log(findit(6, [1,2,3,4,5]));

// 7
const arraynew = [1, 2, 3]
let arraynewupdated = []
for(i in arraynew)
{
  arraynewupdated.push(arraynew[i]);
  if(i==arraynew.length-2)
  {
    break;
  }
}
console.log(arraynewupdated);

// 8
const array1 = [1,2,3,4,5,6,7,8,9]
let count=0;
for(i in array1)
{
  if(array1[i]>5)
  {
    count++;
    break;
  }
}
if(count>0)
{
  console.log("Yes, there exists an element greater than 5 in the array")
}

// 9
const obj1 = {
  'testable': true,
  'removable': false,
  'printable': false,
  'changeable': true
  }
let obj2 = {...obj1}
for(let i=0; i<=obj2.length; i++)
{
  for(item in obj2)
  {
    if(i==obj2.length)
    {
      obj2[i]="completed";
    }
  }
}
console.log(obj2)