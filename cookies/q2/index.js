const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const app = express();
const path = require('path');

app.use(session({
    secret:'mysecret',
    resave: true,
    saveUninitialized: true}));
app.use(flash());
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
    //req.session.name = req.body.name;
    //req.session.age = req.body.age;
    req.flash('name', req.body.name)
    req.flash('age', req.body.age);
    res.redirect(`/output`);
 })
 
 app.get('/output', (req,res) => {
    //res.send(`Welcome ${req.session.name} age: ${req.session.age}`);
    res.send(`Welcome ${req.flash('name')[0]} age: ${req.flash('age')[0]}`);
 })


app.listen(3000);
