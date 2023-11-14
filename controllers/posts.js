const posts = require("../db/arrayPost.json");

// Creiamo poi una rotta /posts che ritorni tramite content negotiation la lista dei post, da un array locale. Ritorniamo i dati sotto forma di json e html stampando una semplice ul.
function index(req, res) {
    res.format({
        html: () => {
            const html = ["<h1> Elenco posts </h1>"]

            html.push("<ul>");

            for (const post of posts) {
                html.push(
                    `<li>
                        <h2>${post.titolo}</h2>
                        <p>${post.contenuto}</p>
                        <img src="/img/${post.immagine}" alt="" style="width: 100px"
                        </li>`);
            }
            html.push("</ul>");

            res.send(html.join(""));
        },

        json: () => {
            res.type("json").send({
                totalPosts: posts.length,
                list: posts
            });
        },

        default: () => {
            res.status(406).send("Error");
        }
    });
}

module.exports = {
    index,
}