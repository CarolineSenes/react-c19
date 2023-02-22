// Création du modèle User

// Import du module Mongoose
const mongoose = require("mongoose");

// Définition du schéma de l'utilisateur
const userSchema = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

// Création du modèle Mongoose pour l'utilisateur, avec comme nom de collection "user"
const UserModel = mongoose.model("user", userSchema);

// Export du modèle pour pouvoir l'utiliser dans d'autres fichiers de l'application
module.exports = UserModel;
