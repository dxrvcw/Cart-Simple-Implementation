const cartIcon = document.querySelector(".header__cart");
const cartWindow = document.querySelector(".header__cart-window");

renderCart();

document.addEventListener("mousemove", (e) => {
	if (
		e.target === cartIcon ||
		e.target === cartWindow ||
		cartWindow.contains(e.target)
	) {
		cartWindow.style.display = "block";
	} else {
		cartWindow.style.display = "none";
	}
});

function displayCartItem(item, quantity) {
	return `<div class="cart-item">
						<div class="cart-item-image-container">
							<img class="cart-item-image" src="${item.image}" alt="">
						</div>
						<div class="cart-item-text">
							<p class="cart-item-title">${item.title}</p>
							
						</div>
						<p class="cart-item-price">${item.price}$</p>
						<p class="cart-item-quantity">${quantity}</p>
						<button class="cart-item-remove-btn" onclick="removeItemFromCart(${item.id})">Remove Item</button>
					</div>`;
}

async function renderCart() {
	let items = await getItemsFromApi();
	let cart = getCart();
	console.log(typeof cart);
	let cartContainer = document.querySelector(".header__cart-window");
	cartContainer.innerHTML = "";
	for (const cartItem of Object.keys(cart)) {
		for (const item of items) {
			if (cartItem == item.id) {
				console.log(item);
				cartContainer.innerHTML += displayCartItem(item, cart[cartItem]);
			}
		}
	}
}
