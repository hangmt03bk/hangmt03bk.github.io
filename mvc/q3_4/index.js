const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'view'));
app.use('/css', express.static(path.join(__dirname,'css')));
app.use('/images', express.static(path.join(__dirname,'images')));


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

var cart=[{id:1,quantity:0},
    {id:2,quantity:0},
    {id:3,quantity:0}];
var count= 0;
app.get('/', (req, res) => {
   res.render("product",{
    products:products,
    count: count});
});

app.post('/addToCart', (req,res) => {
    cart[parseInt(req.body.id)-1].quantity++;
    count++;
    //console.log(cart);
    res.redirect('/');
})

app.get('/shoppingcart', (req,res) => {
    res.render("shoppingcart", {
        count: count,
        cart: cart,
        products: products
    })
})

app.listen(3000);
