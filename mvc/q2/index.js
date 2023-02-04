const express = require('express');
const app = express();
const path = require('path');

//app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'view'));
app.use('css', express.static(path.join(__dirname,'css')));

app.get('/', (req, res) => {
    const date = new Date();
    const cssFile = 'css/' + ((date.getHours()>6 && date.getHours() <20)?'day.css':'night.css');
    res.render("index", {
        cssFile: cssFile
    })
});

app.post('/result', (req,res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name} age: ${age}`);
})

app.listen(3000);
