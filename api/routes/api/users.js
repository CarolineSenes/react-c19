// Définit une route POST pour la création d'un nouvel utilisateur dans la base de données MongoDB

// Import du modèle Mongoose pour l'utilisateur
const UserModel = require("../../database/models/user.model");

// Import du module bcrypt pour le hashage du mot de passe
const bcrypt = require("bcrypt");

// Import du module Router d'Express.js
const router = require("express").Router();

// Définition d'une route POST pour la création d'un nouvel utilisateur
router.post("/", async (req, res) => {
  // Récupération des données de l'utilisateur à partir du corps de la requête
  const { name, email, password } = req.body;
  // Création d'un nouvel utilisateur avec les données récupérées
  const newUser = new UserModel({
    name,
    email,
    password: await bcrypt.hash(password, 8),
  });

  // Sauvegarde du nouvel utilisateur dans la base de données
  newUser.save((err, user) => {
    if (err) {
      console.log(err);
      if (err.code === 11000) {
        res.status(400).json("Email déjà utilisé");
      } else {
        res.status(400).json("Oops une erreur est survenue");
      }
    } else {
      // Si la sauvegarde réussit, renvoyer les données de l'utilisateur créé
      res.json(user);
    }
  });
});

// Export du routeur pour pouvoir l'utiliser dans d'autres fichiers de l'application
module.exports = router;
