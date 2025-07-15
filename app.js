const express = require('express');
const app = express();
const port = 3000;
const projectData = require('./data/projects.json');

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files like CSS
app.use(express.static('public'));

// Home route - shows your projects
app.get('/', (req, res) => {
  res.render('index', { projects: projectData });
});

// About route - shows your internships/about
app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`Portfolio app running at http://localhost:${port}`);
});
