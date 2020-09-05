const mongoose = require("mongoose");


const CommentSchema = new mongoose.Schema({
    stars: {
        type: Number,
        required: [true, "Please rate cake"]
    },
    comment: {
        type: String,
        required: [true, "Comment but contain comment"]
    }
}, {
    timestamps: true
});

const CakeSchema = new mongoose.Schema({
    bakerName: {
        type: String,
        required: [true, "Cake must have a baker's name"]
    },
    imgURL: {
        type: String,
        required: [true, "Cake must have an image URL"]
    },
    Comments: [CommentSchema]
}, {
    timestamps: true
});

mongoose.model("Comment", CommentSchema);
mongoose.model("Cake", CakeSchema);
