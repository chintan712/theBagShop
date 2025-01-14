
const express = require("express");
const router = express. Router();
const isloggedIn= require("../middlewares/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", function (req, res) {
    let error = req.flash("error");
    res.render("index", { error, loggedin: false });
});



router.get("/shop", isloggedIn, async function (req, res) {
    let products =  await productModel.find(); 
    let success = req.flash("success");
    res.render("shop", {products, success} );
});

router.get("/cart", isloggedIn, async function (req, res) {
    let user = await userModel
    .findById(req.user._id)
    .populate("cart");

    const bill = (Number(user.cart[0].price) + 20) - Number(user.cart[0].discount);

    res.render("cart", {user, bill});
});

router.get("/addtocart/:productid", isloggedIn, async function (req, res) {
    try{
        let user =  await userModel.findById(req.user._id);
    if (!user) {
        req.flash("error", "User not found");
        return res.redirect("/shop");
    }
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success", "Added to Cart");
    res.redirect("/shop");
    }
    catch (err) {
        req.flash("error", "Something went wrong");
        res.redirect("/shop");
    }
});

module.exports = router;