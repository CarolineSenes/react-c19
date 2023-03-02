// Import du module Router d'Express.js
const router = require("express").Router();

// Import des routeurs
const apiUsers = require("./users");
const apiAuth = require('./auth');

// Montage des routeurs sur les préfixes "/users" et "/auth" du routeur principal
router.use("/users", apiUsers);
router.use('/auth', apiAuth);

// Export du routeur principal pour pouvoir l'utiliser dans d'autres fichiers de l'application
module.exports = router;
