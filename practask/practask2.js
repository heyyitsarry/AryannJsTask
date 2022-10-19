const apparel = [
    {
    Name: "Jeans",
    Category: "clothes",
    Brand: "Levi",
    Actual_price: 2209,
    Discount: 10
    },
    {
    Name: "Silk Saree",
    Category: "clothes",
    Brand: "Soch",
    Actual_price: 6560,
    Discount: 33
    },
    {
    Name: "T-shirts",
    Category: "clothes",
    Brand: "Westworld",
    Actual_price: 850,
    Discount: 0
    },
    {
    Name: "Dhothi",
    Category: "clothes",
    Brand: "MCR",
    Actual_price: 1570,
    Discount: 2
    },
    {
    Name: "Crocs",
    Category: "shoes",
    Brand: "Killer",
    Actual_price: 2797,
    Discount: 30
    },
    {
    Name: "90s Runner",
    Category: "shoes",
    Brand: "Puma",
    Actual_price: 4999,
    Discount: 50
    },
    {
    Name: "Men\'s Boots",
    Category: "shoes",
    Brand: "Puma",
    Actual_price: 3999,
    Discount: 50
    },
    {
    Name: "Diamond Ring",
    Category: "jewellery",
    Brand: "Bluestone",
    Actual_price: 14800,
    Discount: 0
    },
    {
    Name: "Gold earring",
    Category: "jewellery",
    Brand: "Tanishq",
    Actual_price: 21529,
    Discount: 6
    },
    {
    Name: "Choker",
    Category: "accessories",
    Brand: "Womanista",
    Actual_price: 129,
    Discount: 0
    },
    {
    Name: "Watch",
    Category: "accessories",
    Brand: "Sonic",
    Actual_price: 2534,
    Discount: 2
    }
    ]

    let items = apparel.map(Element => {
        return Element.Name;
    });

    console.log(items);

    const object2 = Object.keys(apparel[1]);
    console.log(object2);