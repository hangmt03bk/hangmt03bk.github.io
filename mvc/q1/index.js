const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req,res) => {
    const date = new Date();
    const cssFile = 'css/' + ((date.getHours()>6 && date.getHours() <20)?'day.css':'night.css');
    //console.log(cssFile);
    res.render("index", {
        time: date.toTimeString(),
        cssFile: cssFile
    })
})

app.listen(3000);