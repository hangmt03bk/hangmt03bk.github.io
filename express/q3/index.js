const express = require('express');
const app = express();
const path = require('path');

//app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/css', express.static(path.join(__dirname,'css')));

const date = new Date();
const hour = date.getHours();
const cssFile = (hour>6 && hour < 20)? 'day.css': 'night.css';
app.get('/', (req, res) => {
    console.log(hour);
 res.send(` 
 <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>my home</title>
        <link href="css/${cssFile}" rel="stylesheet">
    </head>
    <body>
        <form action="/result" method="post"> 
            Name <input type="text" name="name"> 
            Age <input type="number" name="age"> 
            <input type="submit" value="Submit query"> 
        </form>
    </body>
</html>`);
});

app.post('/result', (req,res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name} age: ${age}`);
})

app.listen(3000);
