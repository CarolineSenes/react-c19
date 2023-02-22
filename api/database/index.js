// Connexion à la base de données

// Import du module Mongoose
const mongoose = require("mongoose");

// Connexion à la base de données MongoDB via l'URL spécifiée (à remplacer par une URL valide)
mongoose
  .connect(
    "mongodb+srv://r18jwt_app:q09MVmRS0MlXIEWk@cluster0.1q5gp.mongodb.net/dyma-react18-jwt-course?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("CONNEXION DB OK !");
  })
  .catch((e) => {
    console.log("CONNEXION KO !", e);
  });