const express = require("express");
const mongoose = require("mongoose");
const productModel = require("./models/productModel");
const env = require("dotenv");
const cors = require("cors");
const app = express();

env.config();
app.use(express.json());
app.use(cors());

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.gnws6.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
    }
);

app.post("/entry", async (req, res) => {
    const title = req.body.Title;
    const price = req.body.Price;
    const imageLink = req.body.ImageLink;
    const discription = req.body.Discription;

    const product = new productModel({
        productTitle: title,
        productPrice: price,
        productImageLink: imageLink,
        productDiscription: discription,
    });

    try {
        await product.save();
        res.send("inserted data");
    } catch (err) {
        console.log(err);
    }
});

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});