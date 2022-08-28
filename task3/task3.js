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

// 1
const [firstelement, ...restelement] = [...teams];
console.log(firstelement);
console.log(restelement);

// 2
// removing the last element of the array "Teams" using slicing of the array
const remlast = teams.slice(0,3);
console.log(remlast);

// 3
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

// 5
group1=[];
for(let i=0; i<teams.length; i++)
{
   if(teams[i].points>=20 && teams[i].groupId[0]==1)
   {
       group1.push(teams[i]);
   }
}
console.log(group1);

// 6
// let teamsid = [];
// for(let i=0; i<=teams.length; i++)
// {
//     if(teams[i].id== 4)
//     {
//         teamsid.push(teams[i]);
//     }
// }
// console.log(teamsid);

// 8
group34=[];
for(let i=0; i<teams.length; i++)
{
   if(teams[i].groupId[0]==3 && teams[i].groupId[1]==4 || teams[i].groupId[0]==4 && teams[i].groupId[1]==3)
   {
       group34.push(teams[i]);
   }
}
console.log(group34);

// 9
updatedgrouppoints=[];
for(let i=0; i<teams.length; i++)
{
   if(teams[i].groupId[0]==3 || teams[i].groupId[1]==3)
   {
       teams[i].points = teams[i].points-5;
       updatedgrouppoints.push(teams[i])
   }
   else{
    updatedgrouppoints.push(teams[i])
   }
}
console.log(updatedgrouppoints);

// 11
console.log(teams.filter(({points}) => points>10 )  );
console.log(teams.filter(({points}) => points===10 )  );

// 12
manU = { name: "Manchester United", 
id: 1, group: ["ChampionsLeague", "League Cup"], 
points: 10, jerseyColour: "red", 
homeGround: "Old Trafford", 
awayJerseyColour: "black", 
captain: "Harry", 
coach: "OGS", }

// consle.log(manU.filter({awayJerseyColour} => awayJerseyColour);