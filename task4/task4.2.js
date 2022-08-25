const students = [
    { name: "A", age: 17, college: "UVCE", stream: 'CSE', currentYear: 1 },
    { name: "B", age: 19, college: "KEAM", stream: 'ECE', currentYear: 2 },
    { name: "C", age: 23, college: "UVCE", stream: 'EEE', currentYear: 4 },
    { name: "D", age: 18, college: "UVCE", stream: 'CSE', currentYear: 3 },
    { name: "E", age: 22, college: "KEAM", stream: 'AEI', currentYear: 4 },
    { name: "F", age: 21, college: "NETE", stream: 'EEE', currentYear: 3 }
]

// 1
let arrayCY = [];
for (let i = 0; i <= students.length; i++) {
    for (item in students[i]) {

        if (students[i].currentYear == 4) {
            arrayCY.push(students[i].name);
        }
        break;
    }
}
console.log("The students qualified for voting are : ",arrayCY);

// 2
let arraycollege = [];
for (let i = 0; i <= students.length; i++) {
    for (item in students[i]) {

        if (students[i].name == "B") {
            students[i].college = "NETE"
        }
        arraycollege.push(students[i]);
        break;
    }
}
console.log(arraycollege);

// 3
let arraystream = [];
for(let i=0; i<students.length; i++)
{
    for(item in students[i])
    {
        if(students[i].stream=="EEE")
        {
            arraystream.push(students[i].name)
        }
        break;
    }

}
console.log(arraystream);
