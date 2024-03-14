function addItemToCart(id) {
	let cart = JSON.parse(localStorage.getItem("cart")) || {};
	if (!cart[id]) {
		cart[id] = 1;
	} else {
		cart[id]++;
	}
	localStorage.setItem("cart", JSON.stringify(cart));
	renderCart();
}

function getCart() {
	return JSON.parse(localStorage.getItem("cart")) || {};
}

function removeItemFromCart(id) {
	let cart = JSON.parse(localStorage.getItem("cart"));
	cart[id]--;
	if (!cart[id]) delete cart[id];
	localStorage.setItem("cart", JSON.stringify(cart));
	renderCart();
}
