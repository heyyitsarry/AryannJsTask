let sampleData = {
    name: "World Cup 2018",
    matches: [
        {
            Id: 1,
            match: 'group-stage-1',
            team1: {
                name: "Russia",
                code: "RUS"
            },
            team2: {
            name: "Saudi Arabia",
            code: "KSA"
            },
            knockout: false,
            stadium: {
                key: "luzhniki",
                name: "Luzhniki Stadium"
            }
        },
        {
            Id: 2,
            match: 'group-stage-2',
            team1: {
                name: "Egypt",
                code: "EGY"
            },
            team2: {
                name: "Uruguay",
                code: "URU"
            },
            knockout: false,
            stadium: {
                key: "ekaterinburg",
                name: "Ekaterinburg Arena"
            },
        },
        {
            Id: 3,
            match: 'group-stage-3',
            team1: {
                name: "Portugal",
                code: "POR"
            },
            team2: {
                name: "Spain",
                code: "ESP"
            },
            knockout: false,
            stadium: {
                key: "fisht",
                name: "Fisht Stadium"
            },
        },
        {
            Id: 5,
            match: 'semi-final-2',
            team1: {
                name: "Croatia",
                code: "CRO"
            },
            team2: {
                name: "England",
                code: "ENG"
            },
            knockout: true,
            stadium: {
                key: "luzhniki",
                name: "Luzhniki Stadium"
            },
        },
        {
            Id: 6,
            match: 'final',
            team1: {
                name: "France",
                code: "FRA"
            },
            team2: {
                name: "Croatia",
                code: "CRO"
            },
            knockout: true,
            stadium: {
                key: "luzhniki",
                name: "Luzhniki Stadium"
            },
        }
    ]
};

semifinal1=[{
    Id: 4,
    match: 'semi-final-1',
    team1: {
    name: "India",
    code: "IND"
    },
    team2: {
    name: "Pakistan",
    code: "PAK"
    },
    knockout: true,
    stadium: {
    key: "Pochinki",
    name: "Pochinki Arena"
    },
    }]

// 1
sampleData.matches.splice(3,0,...semifinal1);
console.log(sampleData);

// 2
let sorted=sampleData.matches.sort((a,b) => {
    return a.Id - b.Id;
})
console.log(sorted);