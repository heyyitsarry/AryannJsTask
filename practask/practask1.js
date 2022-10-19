const comp1 = [
    {
        first_name: "Ben",
        last_name: "Almond",
        age: 28,
        position: "Senior Engineer",
        company: "ABC",
        location: "TVM",
        appraisal: 0,
    },
    {
        first_name: "Andrew",
        last_name: "Lords",
        age: 22,
        position: "Engineer",
        company: "ABC",
        location: "TVM",
        appraisal: 3,
    },
    {
        first_name: "Arathi",
        last_name: "A",
        age: 42,
        position: "PM",
        company: "ABC",
        location: "TVM",
        appraisal: 9,
    },
];

const comp2 = [
    {
        first_name: "Subin",
        last_name: "Viswa",
        age: 28,
        position: "Engineer",
        company: "ABC",
        location: "Kochi",
        appraisal: 1,
    },
    {
        first_name: "Dev",
        last_name: "Raj",
        age: 21,
        position: "Architect",
        company: "ABC",
        location: "Kochi",
        appraisal: 2,
    },
    {
        first_name: "Thomas",
        last_name: "Mathew",
        age: 28,
        position: "Architect",
        company: "ABC",
        location: "Kochi",
        appraisal: 5,
    },
    {
        first_name: "Deepa",
        last_name: "Thomas",
        age: 31,
        position: "Senior Engineer",
        company: "ABC",
        location: "Kochi",
        appraisal: 4,
    },
    {
        first_name: "Antony",
        last_name: "Thomas",
        age: 31,
        position: "Senior Engineer",
        company: "ABC",
        location: "Kochi",
        appraisal: 4,
    },
];
const newarray = [...comp1, ...comp2]
console.log(newarray);

// Concat
console.log(comp1.concat(comp2));

// Join
const array = ["a","r","r","y"];
console.log(array.join(""));

// slice
comp1.slice(0,1);
console.log(comp1.slice(0,2));

// Itreationg functions 

// This function returns the first name of all the objects present in the comp1 array
comp1.forEach(comp1 => {
    console.log(comp1.first_name);
});

comp1.forEach(comp1 => {
    console.log(comp1.first_name," : ",comp1.age);
     
});

// array.every(array => {
//     if(array>0);
// });

comp1.filter((index,comp1) => 
{

});

employees = [...comp1 , ...comp2];
console.log(employees);

employees.forEach(employees => {
    console.log(employees.first_name);
});

let agearray = employees.filter(employees => {
    return employees.age > 25 && employees.position ==  "Engineer";
});

console.log(agearray);

employees.filter(employees => {
    return console.log(employees.appraisal == 0);
});

employees.forEach(employees => {
    if (employees.appraisal == 0){
        console.log("Not every employ has recieved an appraisal");
    }
});

// let appraisal = employees.map(obj => {
//     employees.appraisal = 3;
//     if (obj.id === 1) {
//         return {...obj, appraisal: 3};
//       }
// });
// console.log(appraisal);

let sum = 0;
employees.forEach(Element => {
    sum = sum + Element.appraisal;
});
console.log("The sum of all the apraisals is : ",sum);

let count1=0;
let count2=0;
let count3=0;
let count4=0;
const age = employees.forEach(Element => {
    if(Element.age< 28)
    {   
        count1++; 
    }
    if(Element.age>= 28 && Element.age< 30)
    {   
        count2++; 
    }
    if(Element.age> 30 && Element.age< 40)
    {   
        count3++; 
    }
    if(Element.age> 40)
    {   
        count4++; 
    }
});
console.log(" \n No. of people in the age range of 0 to 28 : ",count1,"\n","No. of people in the age range of 28 to 30 : ",count2,"\n","No. of people in the age range of 30 to 40 : ",count3,"\n","No. of people in the age range greater then 40 : ",count4);
