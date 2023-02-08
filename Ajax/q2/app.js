const express = require('express');
const { get } = require('http');
const path = require('path');
const getAnswer = require('./public/answer');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'view'));
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

app.get('/', (req,res) => {
    res.render('form');
})

app.get('/8ball', (req,res) => {
    //console.log('get request: ' + req.query);
    const ans = getAnswer();
    console.log(ans);
    res.send(ans);
});

app.listen(3000);