const cartIcon = document.querySelector(".header__cart");
const cartWindow = document.querySelector(".header__cart-window");

document.addEventListener("mousemove", (e) => {
    if (e.target === cartIcon || e.target === cartWindow || cartWindow.contains(e.target)) {
        cartWindow.style.display = "block";
    } else {
        cartWindow.style.display = "none";
    }
});