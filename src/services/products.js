const { initialState } = require("../utils/mocks/PlatziStore");

class ProductService {
	async getProducts() {
		const Products = await Promise.resolve(initialState.products);
		return Products || [];
	}

	async getProduct(productId) {
		const Product = await Promise.resolve(
			initialState.products.filter(product => product.id === productId)
		);
		return Product || {};
	}
}

module.exports = ProductService;
