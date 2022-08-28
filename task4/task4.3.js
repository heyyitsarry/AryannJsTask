const arr1 = [
    {key : "1" , value: "abc"},
    {key : "2" , value: "def"},
    {key : "3" , value: "ghi"},
    {key : "4" , value: "jkl"}
    ];

 // 1
 for(i in arr1)
 {
    if(arr1[i].key == "3"){
        arr1[i].value = "xyz"
    }
 }
 console.log(arr1);

// 2
let arr2=[]
for(i in arr1){
    arr2.push(arr1[i].value)
}
console.log("The merged array is : ",arr2.join(""))