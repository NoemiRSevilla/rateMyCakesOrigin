const cakes = require ("../controllers/cakes");

const comments = require("../controllers/cakes");
module.exports = (app) => {

    app.get('/api/cakes', (req,res) => cakes.index(req,res));

    app.get('/api/cake/:id', (req, res) => cakes.show(req, res));

    app.post('/api/create/cake', (req, res) => cakes.create(req, res));

    app.post('/api/cake/:cakeId/create/comment', (req, res) => {
        console.log(req.params.id);
        comments.addComment(req, res)
    });
}