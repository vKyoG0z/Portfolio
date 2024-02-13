const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

// Définir la route pour les pages HTML
app.get('/', (req, res) => {
  // Renvoyer la page index.html avec la barre de navigation incluse
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Définition de la route pour la barre de navigation
app.get('/navbar', (req, res) => {
  // Renvoyer la barre de navigation (navbar.html) avec l'identifiant de la page actuelle
  let currentPage = req.query.page || 'accueil'; // Page par défaut : accueil
  res.sendFile(resolve(__dirname, 'pages/navbar.html'));
});

//Définition de la route pour la page projet
app.get('/projet', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/projet.html'));
});

//Définition de la route pour la page formation
app.get('/formation', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/formation.html'));
});

//Définition de la route pour la page contact
app.get('/contact', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/contact.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
