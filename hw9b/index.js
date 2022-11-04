const express = require("express")
const app = express()


const multer = require("multer")
const upload = multer()



app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// Serve content of the "public and css" subfolder directly
app.use(express.static("public"));
app.use(express.static("css"));


app.get("/api/countries", (req, res) => {

    res.sendFile(`${__dirname}/views/ex2.html`);
});



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

app.post("/api/countries", (req, res) => {
    const parsedCountries = JSON.parse(countriesVisited)
    // const travellerName = parsedCountries.name
    // const numberVisited = parsedCountries.countries.length
    // res.json(`Your name is ${travellerName}and you visited countries. Keep travelling!`);
    
    res.send(parsedCountries);

});




// const countriesVisited = [
//     {
//         name: "Andrej",
//         countries: ["Montenegro", "Italy", "USA", "France", "Russia"]
//     }
// ]

// Return a string for requests to the root URL ("/")
app.get("/", (req, res) => {
    // response.send("Hello from Express!");
    res.sendFile(`${__dirname}/views/index.html`);
});





// Return a web page for requests to "/ex1"
app.get("/ex1", (request, response) => {
    response.sendFile(`${__dirname}/views/ex1.html`);
});

  // Handle form data submission to the "/ex1" route
app.post("/ex1", upload.array(), (request, response) => {
    console.log(request.body); // Testing
    const name = request.body.name;
    const email = request.body.email;
    response.send(`${name}, Thank you for your order. We will keep you posted on delivery status at ${email}.`)

});











const listener = app.listen(process.env.PORT || 3000, () => {
    console.log(`App is listening on port ${listener.address().port}`)
})




