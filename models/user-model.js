const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    passsward: String,
    cart: {
        type: Array,
        default: []
    },
    isAdmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contanct: Number,
    picture: String
});

module.exports =  mongoose.model("user", userSchema);