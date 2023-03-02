// Permet de travailler avec des fichiers
const fs = require("fs");

module.exports = {
  // Lecture des 2 fichiers
  key: fs.readFileSync(`${__dirname}/jwtRS256.key`), //clé privée
  keyPub: fs.readFileSync(`${__dirname}/jwtRS256.key.pub`), //clé privée. Ell DOIT RESTER SECRETE ! Il ne faut jamais la partager en la metant sur un répertoire public par exemple.
};
