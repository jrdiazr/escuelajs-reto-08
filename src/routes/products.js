const express = require("express");
const ProductService = require("../services/products");
const path = require("path");

function productsApi(app) {
	const router = express.Router();
	app.use("/", router);
	const productsService = new ProductService();

	router.get("/", async (req, res) => {
		let userInfo = req.header("user-agent");
		res.send(`UserInfo: ${userInfo}`);
	});

	router.get("/receipts", async (req, res) => {
		let file = path.join(__dirname, "../assets/receipt.pdf");
		res.sendFile(file);
	});

	router.get("/products", async (req, res) => {
		let storeProducts = await productsService.getProducts();

		res.status(200).json(storeProducts);
	});
	router.get("/product/:productId", async (req, res) => {
		const { productId } = req.params;
		let storeProducts = await productsService.getProduct(productId);

		res.status(200).json(storeProducts);
	});
}

module.exports = productsApi;
