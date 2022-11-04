



const countriesVisited = [
    {
        name: "Andrej",
    },
    {
        countries: [
            {
                country:"Montenegro",
                year: 2022
            },
            {
                country:"Italy",
                year: 2017
            },
            {
                country:"France",
                year: 2015
            },
            {
                country:"Russia",
                year: 2018
            },
            {
                country:"USA",
                year: 2022
            }
        ]
    }
]


    fetch("http://localhost:3000/api/countries", {
        method: "POST",
        headers: {
            Accept: "application/json"
        },
        body: JSON.stringify(countriesVisited)
        })
        .then(response => response.text())
        .then(result => {
            console.log(result.name)
            let cVisitedNo = result.countries.length
            console.log(cVisitedNo)
            // document.getElementById("output").textContent = result;
        })
        .catch(err => {
            console.error(err.message);
        });
        
