const express = require('express');
const app = express();
const port = 3000
const exphbs = require('express-handlebars');


app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio');
})

app.get('/contact', (req, res) => {
  res.render('contact');
})


app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');
});