// Import du module Router d'Express.js
const router = require("express").Router();

// Import du routeur "apiUsers" défini dans le fichier "./users.js"
const apiUsers = require("./users");

// Montage du routeur "apiUsers" sur le préfixe "/users" du routeur principal
router.use("/users", apiUsers);

// Export du routeur principal pour pouvoir l'utiliser dans d'autres fichiers de l'application
module.exports = router;
