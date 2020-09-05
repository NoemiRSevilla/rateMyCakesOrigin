require("../models/cake");


const mongoose = require("mongoose"),
    Cake = mongoose.model("Cake");
    Comment = mongoose.model("Comment");


module.exports = {
    index: (req,res) => {
        Cake.find()
            .then(cakes => {
                res.json({results: cakes});
            })
            .catch(err => {
                res.json({errors: err.errors});
            })
    },
    create: (req, res) => {
        Cake.create(req.body)
            .then(cake => {
                res.json({ results: cake});
            })
            .catch(err => {
                res.json({errors:err.errors});
            })
    },
    show: (req, res) => {
        Cake.findOne({_id: req.params.id})
            .then(cake => {
                res.json({results: cake});
            })
    },
    addComment: (req, res) => {
        Comment.create(req.body)
            .then(comment => {
                Cake.findOneAndUpdate({_id:req.params.cakeId}, {$push:{Comments: comment}})
                    .then( cake => {
                        res.json({
                            results: cake
                        })
                    })
                    .catch(err => {
                        res.json({
                            errors: err.errors
                        });
                    })
            })
            .catch(err => {
                res.json({
                    errors: err.errors
                });
            });
    }
}