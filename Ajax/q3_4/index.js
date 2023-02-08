const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:'mysecret',
    resave: true,
    saveUninitialized: true
}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'view'));
app.use('/css', express.static(path.join(__dirname,'css')));
app.use('/images', express.static(path.join(__dirname,'images')));
app.use('/js', express.static(path.join(__dirname,'view','js')));


var products = [
{
    id: 1,
    name: "Frosted Flakes",
    price: 3.78,
    desc: "Kellogg's Frosted Flakes Original Cold Breakfast Cereal, 13.5 oz",
    src:'https://i5.walmartimages.com/asr/43e54588-621b-4bc8-b4a1-56d6a2ad9215.c52e91b858efa2a8675f287a1c0b0198.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
},
{
    id: 2,
    name: "Froot Loops",
    price: 3.68,
    desc: "Kellogg's Froot Loops Original Cold Breakfast Cereal, 10.1 oz",
    src:'https://i5.walmartimages.com/asr/8db200fd-0a81-428f-b391-778abfef39fa.f2a3373a7e08817db7948744502dfaca.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
},
{
    id: 3,
    name: "Pop Tarts",
    price: 3.28,
    desc: "Pop Tarts Frosted Strawberry Toaster Pastries, 13.5 oz, 8 Count",
    src:'https://i5.walmartimages.com/asr/2d580cc0-d764-4e19-a3f5-caf873f8e99a.646eac08736e2fbe31cc6c3815938ffd.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
}
];

app.get('/', (req, res) => {
    if(!req.session.count)
        req.session.count = 0;

   res.render("product",{
    products:products,
    count: req.session.count});
});

app.post('/addToCart', (req,res) => {
    const itemId = JSON.parse(req.body.data).id;
    console.log(itemId);
    if(!req.session.cart) req.session.cart = {};
    if(req.session.cart[itemId] == undefined)
        req.session.cart[itemId] = {quantity: 1, index: parseInt(itemId)-1};
    else
        req.session.cart[itemId].quantity++;
    req.session.count++;
    //console.log(req.session.cart);
    res.send(req.session.count.toString());
})

app.get('/shoppingcart', (req,res) => {
    console.log(req.session.cart);
    res.render("shoppingcart", {
        count: req.session.count,
        cart: req.session.cart,
        products: products
    })
})

app.listen(3000);
