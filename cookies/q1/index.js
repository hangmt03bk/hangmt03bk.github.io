const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'view'));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.listen(3000,() => console.log('server is running ...'));

app.get('/', (req,res) => {
    res.locals = {cookies: req.cookies};
    res.render('addcookie');
})

app.post('/addcookie', (req, res) => {
    res.cookie(req.body.key, req.body.value);
    res.redirect('/');
})


