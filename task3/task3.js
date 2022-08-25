const teams = [
    {
    name: "Chelsea",
    id: 1,
    groupId: [1, 2],
    points: 10,
    },
    {
    name: "Liverpool",
    id: 2,
    groupId: [2, 3],
    points: 20,
    },
    {
    name: "Manchester United",
    id: 3,
    groupId: [3, 4],
    points: 50,
    },
    {
    name: "Arsenal",
    id: 4,
    groupId: [1, 4],
    points: 20,
    },
    ]
// removing the first element of the array "Teams" using spread operator    
// const newarray = [...teams];
// console.log(newarray);
const [firstelement, ...restelement] = [...teams];
console.log(firstelement);
console.log(restelement);

// removing the last element of the array "Teams" using slicing of the array
const remlast = teams.slice(0,3);
console.log(remlast);

//  finding total points of all teams
let totalpoints = [];
let sum = 0;
for (item in teams)
{
    
    sum = sum + teams[item].points;
    totalpoints.push(teams[item].points);
}
// console.log(totalpoints);
console.log("The sum of all the Points is :",sum);

group1=[];
group2=[];
for(let i=0; i<teams.length; i++)
{
    for(item in teams[i])
    {

        if(item == "points")
        {
            if(teams[i][item]>=20)
            {
                group1.push(teams[i]);
            }
            else
            {
                group2.push(teams[i]);
            }
        }
    }
}
console.log(group1);
console.log(group2);

id4=[];
for(let i=0; i<teams.length; i++)
{
    for(item in teams[i])
    {

        if(item == "id")
        {
            if(teams[i][item]==4)
            {
                id4.push(teams[i].name);
            }
        }
    }
}
console.log(id4);

group34 = [];
for(let i=0; i<teams.length; i++)
{
    for(item in teams[i])
    {
        if(item == "groupId")
        {
            for(j in teams[i][item])
            {
                if(j==3)
                {
                    group34.push(teams[i]);
                }
            }
        }
    }
}
console.log(group34);