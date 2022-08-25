const array1 = [1, 2, 3, 1, 4, 10, 15, 16, 5, 12, 18, 19, 2, 20]
let newarray = []
for(i in array1)
{
    if(array1[i]%2==0)
    {
        newarray.push(array1[i]);
    }
}
console.log(newarray);

// Arrange Descending Order
newarray.sort(function(a,b){return b-a});
console.log(newarray);

// Emptying an array
// 1
newarray1 = [...newarray];
newarray1 = [];
console.log(newarray1); 

// 2
newarray1 = [...newarray];
newarray1.length =0;
console.log(newarray1); 

// 3
newarray1 = [...newarray];
for(let i=8; i>=0; i--)
{
    newarray1.pop();
    
}
console.log(newarray1);

// 4
newarray1 = [...newarray];
newarray1.splice(0,8);
console.log(newarray1);

// finding No. 3
let count = 0;
for(i in newarray)
{
    if(newarray[i]==3)
    {
        count++
    }
}
if(count>0)
{
    console.log("Number 3 found");
}
else{
    console.log("Not found");
}

