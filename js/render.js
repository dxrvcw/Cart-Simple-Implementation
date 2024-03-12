renderItems();

async function getItemsFromApi() {
	const data = await (await fetch("./items.json")).json();
	return data;
}

function displayItem(item) {
	return `
      <div class="item">
				<div class="item-image-container">
					<img class="item-image" src="${item.image}" alt="" />
				</div>
        <div class="item-description-container">
          <h2 class="item-title">${item.title}</h2>
          <p class="item-desc">${item.desc}</p>
          <div class="item-footer">
            <p class="item-price">${item.price}$</p>
            <button class="item-add-btn" onclick="addItemToCart(${item.id})">Add to Cart</button>
          </div>
        </div>
			</div>
    `;
}

async function renderItems() {
	let itemsContainer = document.querySelector(".items-container");
	itemsContainer.innerHTML = "";
	const items = await getItemsFromApi();
	console.log(items);
	for (const item of items) {
		itemsContainer.innerHTML += displayItem(item);
	}
}
