const express = require('express');
const app = express();

//app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
 res.send(' \
 <form action="/result" method="post"> \
    Name <input type="text" name="name"> \
    Age <input type="number" name="age"> \
    <input type="submit" value="Submit query"> \
</form>');
});

app.post('/result', (req,res) => {
    let name = req.body.name;
    let age = req.body.age;
    res.send(`Welcome ${name} age: ${age}`);
})

app.listen(3000);
