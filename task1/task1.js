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

// 1
const newarray = [...comp1, ...comp2]
console.log(newarray);

// 3
let newarray1 = [];
for (i in newarray) {
    if (newarray[i].position == "Engineer" && newarray[i].age > 25) {
        newarray1.push(newarray.first_name)
    }
}
console.log(newarray1);

// 4
let comp3 = comp1.filter(({ position }) => position === "Architect")
let comp4 = comp2.filter(({ position }) => position === "Architect")
const comp5 = [...comp3, ...comp4]
console.log(comp5)

// 5
function compappraisal(newarray) {
    for (i in newarray) {
        if (newarray[i].appraisal == 0) {
            return console.log(newarray[i].first_name, newarray[i].last_name, "has not recieved an appraisal");
        }
    }
}
compappraisal(newarray);

// 6
function appraisal(newarray) {
    let count = 0;
    let newarray2 = newarray.filter(({ appraisal }) => appraisal > 0);
    if (newarray2.length > 0) {
        return console.log("The number of eployees that recieved an appraisal are : ", newarray2.length);
    }
}
appraisal(newarray)

// 9
let totalappraisal = 0
for (i in newarray) {
    totalappraisal = totalappraisal + newarray[i].appraisal;
}
console.log("The total number of appraisal count is : ", totalappraisal);

// 10
function agedistribution(newarray) {
    let age1 = 0;
    for (i = 0; i < newarray.length; i++) {
        if (newarray[i].age > 20 && newarray[i].age <= 25) {
            age1++;
        }
    }
    console.log("Number of people in age group 21-25 : ",age1);

    let age2 = 0
    for (i = 0; i < newarray.length; i++) {
        if (newarray[i].age > 25 && newarray[i].age <= 30) {
            age2++;
        }
    }
    console.log("Number of people in age group 25-30 : ",age2);

    let age3 = 0
    for (i = 0; i < newarray.length; i++) {
        if (newarray[i].age > 30 && newarray[i].age <= 40) {
            age3++;
        }
    }
    console.log("Number of people in age group 30-40 : ",age3);

    let age4 = 0
    for (i = 0; i < newarray.length; i++) {
        if (newarray[i].age > 40 && newarray[i].age <= 50) {
            age4++;
        }
    }
    console.log("Number of people in age group 40-50 : ",age4);

}
agedistribution(newarray);