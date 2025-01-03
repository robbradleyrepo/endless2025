// app.js
const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const PORT = process.env.PORT || 3000;

// Configure Nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.render('home.njk', { title: 'Home' });
});

app.get('/index', (req, res) => {
  res.render('home.njk', { title: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about.njk', { title: 'About' });
});

app.get('/artwork', (req, res) => {
  res.render('artwork.njk', { title: 'Artwork' });
});

app.get('/exhibitions', (req, res) => {
  res.render('exhibitions.njk', { title: 'Exhibitions' });
});

app.get('/books', (req, res) => {
  res.render('books.njk', { title: 'Books' });
});

app.get('/press', (req, res) => {
  res.render('press.njk', { title: 'Press' });
});

app.get('/contact', (req, res) => {
  res.render('contact.njk', { title: 'Contact' });
});

app.get('/subscribe', (req, res) => {
  res.render('subscribe.njk', { title: 'Subscribe' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
