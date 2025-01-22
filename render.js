const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');
const barba = require('@barba/core');
const gsap = require('gsap');

// Configure Nunjucks
nunjucks.configure('views', {
  autoescape: true,
});

// Define the templates and the data to be used
const templates = [
  { template: 'home.njk', output: 'home.html', data: { title: 'Home' } },
  { template: 'about.njk', output: 'about.html', data: { title: 'About' } },
  { template: 'artwork.njk', output: 'artwork.html', data: { title: 'Artwork' } },
  { template: 'exhibitions.njk', output: 'exhibitions.html', data: { title: 'Exhibitions' } },
  { template: 'books.njk', output: 'books.html', data: { title: 'Books' } },
  { template: 'press.njk', output: 'press.html', data: { title: 'Press' } },
  { template: 'contact.njk', output: 'contact.html', data: { title: 'Contact' } },
  { template: 'subscribe.njk', output: 'subscribe.html', data: { title: 'Subscribe' } },
];

// Render the templates and save the output
templates.forEach(item => {
  const result = nunjucks.render(item.template, item.data);
  fs.writeFileSync(path.join('dist', item.output), result);
  console.log(`Generated ${item.output}`);
});

// Copy the public directory to the dist directory
fse.copy('public', 'dist', err => {
  if (err) {
    console.error('Error copying public directory:', err);
  } else {
    console.log('Public directory copied to dist/public');
  }
});

// Initialize Barba.js
barba.init({
  transitions: [
    {
      name: 'fade',
      leave(data) {
        return gsap.to(data.current.container, { opacity: 0 });
      },
      enter(data) {
        return gsap.from(data.next.container, { opacity: 0 });
      }
    }
  ]
});
