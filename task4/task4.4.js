const obj1 = {a: 1 , b: 2}
const obj2 = {c:3, d:4 , e:5}

const arr = [{...obj1},{...obj2}]
console.log(arr)
let newarray3=[];
for(i in arr)
{
    for(let j=0; j<2; j++){
        if(arr[i][j]=="a")
        {
            newarray3.push("a");
        }
        else if(arr[i][j]=="b")
        {
            newarray3.push("b");
        }
        else if(arr[i][j]=="c")
        {
            newarray3.push("c");
        }
        else
        {
            newarray3.push("d");
        }
    }
}
console.log(newarray3)