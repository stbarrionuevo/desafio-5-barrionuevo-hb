
const express = require('express');
const {engine} = require('express-handlebars');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const products = [];

app.engine('handlebars', engine());
app.set('views', './views') 
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
  res.render('products');
});
app.post('/products', async (req, res) => {
  const { name, price, URL } = req.body;
  products.push({ name, price, URL });
  res.redirect('/');
});

const PORT = 8081;

try{
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))}

catch(err){
  app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
}