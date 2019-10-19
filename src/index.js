const express = require("express"),
	path = require("path"),
	app = express(),
	port = process.env.PORT || 3000;

const productsApi = require("./routes/products");

productsApi(app);

app.listen(port, err => {
	if (err) {
		console.error("Error: ", err);
		return;
	}
	console.log(`Listening http://localhost:${port}`);
});
