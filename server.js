const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configure Nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Define routes to render Nunjucks templates
const pages = [
  { route: '/', template: 'home.njk', data: { title: 'Home' } },
  { route: '/about', template: 'about.njk', data: { title: 'About' } },
  { route: '/artwork', template: 'artwork.njk', data: { title: 'Artwork' } },
  { route: '/exhibitions', template: 'exhibitions.njk', data: { title: 'Exhibitions' } },
  { route: '/books', template: 'books.njk', data: { title: 'Books' } },
  { route: '/press', template: 'press.njk', data: { title: 'Press' } },
  { route: '/contact', template: 'contact.njk', data: { title: 'Contact' } },
  { route: '/subscribe', template: 'subscribe.njk', data: { title: 'Subscribe' } },
];

pages.forEach(page => {
  app.get(page.route, (req, res) => {
    res.render(page.template, page.data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
