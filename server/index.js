const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productModel = require("./models/productModel");
const env = require("dotenv");

env.config();
app.use(express.json());

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.gnws6.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
    }
);

app.post("/entry", async (req, res) => {
    const product = new productModel(
        { productTitle: "test", productPrice: 100, productImageLink: "abc", productDiscription: "i got a go" }
    );

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