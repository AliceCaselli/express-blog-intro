// Testare le immagini scrivendo manualmente il link nel browser.
// Bonus
// Nel stampare la ul in html, si potrebbe inserire anche un tag img, la descrizione e la lista dei tag
// Spostiamo l’array dei post in un file separato da importare poi dentro il controller

const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const port = 8081;
const postController = require("./controllers/posts");
const app = express();

// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
app.use(express.static("public"));

// Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
app.get('/', (req, res) => {
    res.send("<h1>Benvenuti nel mio blog</h1>");
});

// Le rotte relative ai post dovranno chiamare la funzione relativa dal controller dedicato controllers/posts.js
app.get("/posts", postController.index)

app.listen(port, () => {
    console.log("funziona");
});




