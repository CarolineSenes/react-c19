// Import du module Router d'Express.js
const router = require("express").Router();

// Import du routeur "apiRouter" défini dans le fichier "./api.js"
const apiRouter = require("./api");

// Montage du routeur "apiRouter" sur le préfixe "/api" du routeur principal
router.use("/api", apiRouter);

// Export du routeur principal pour pouvoir l'utiliser dans d'autres fichiers de l'application
module.exports = router;
