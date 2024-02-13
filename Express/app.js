// installed express module is imported

const express = require("express")
const path = require("path");
const fs = require("fs");
// created an express app
const app = express();

const port = 80;

//EXPRESS SPECIFIC STUFF
app.use(`/static`, express.static(`static`))// for serving static files 
//this middleware help to provide your form data to express
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');// set the templete engine as pug
app.set('views', path.join(__dirname, 'views'));// set the views  folder directory


// ENDPOINTS
//for get request
app.get("/", (req, res) => {
    // Sending Variable 
    const params = { 'title': 'Fitness Club', }
    res.status(200).render('index.pug', params)
});
//for post request
app.post('/', (req, res) => {
    name = req.body.name
    age = req.body.name
    email = req.body.email
    gender = req.body.gender
    more = req.body.more


    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender},Additional information about client ${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params = { 'message': 'Your form has been submitted successfully', }
    res.status(200).render('index.pug', params)
})



//STARTING THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})

