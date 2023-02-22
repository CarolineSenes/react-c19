// Création d'un serveur HTTP

// Import des modules
const express = require("express");
const cookie = require("cookie-parser");

// Création de l'application Express
const app = express();

// Import des routes de l'application
const routes = require("./routes");

// Utilisation du middleware cookie-parser pour gérer les cookies dans les requêtes
app.use(cookie());

// Utilisation du middleware express.json() pour parser les corps des requêtes HTTP en JSON
app.use(express.json());

// Connexion à la base de données via le module database
require("./database");

// Montage des routes sur l'application Express
app.use(routes);

// Route par défaut pour renvoyer une erreur 404 en cas de requête vers une URL inexistante
app.use("*", (req, res) => {
  res.status(404).json("mauvaise routes");
});

// Lancement de l'application sur le port 3001
app.listen(3001);
