// Configure le middleware de proxy pour rediriger les requêtes HTTP dont l'URL commence par "/api/" vers le serveur backend qui tourne sur l'URL "http://127.0.0.1:3001"
// Import du module http-proxy-middleware
const { createProxyMiddleware } = require("http-proxy-middleware");

// Export d'une fonction qui configure le middleware de proxy pour rediriger les requêtes vers le serveur backend
module.exports = (app) => {
  app.use(
    "/api/*", // Les requêtes HTTP dont l'URL commence par "/api/" seront redirigées vers le serveur backend
    createProxyMiddleware({
      target: "http://127.0.0.1:3001", // URL du serveur backend
      secure: false, // Ne pas vérifier le certificat SSL du serveur backend (car il est auto-signé dans cet exemple)
    })
  );
};
