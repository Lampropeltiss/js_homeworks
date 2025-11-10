// localStorage.clear();

const cart = document.querySelector(".cart__products");
const products = document.querySelector(".products");

const addNewProduct = (productId, amountToAdd) => {
    const product = products.querySelector(`[data-id='${productId}']`);
    const img = document.createElement("img");
    img.classList.add("cart__product-image");
    img.src = product.querySelector("img").src;

    const count = document.createElement("div");
    count.classList.add("cart__product-count");
    count.textContent = amountToAdd;

    const productObject = document.createElement("div");
    productObject.classList.add("cart__product");
    productObject.dataset.id = productId;
    productObject.append(img);
    productObject.append(count);

    cart.append(productObject);
    localStorage.setItem(productId, amountToAdd);
}

for (var i = 0; i < localStorage.length; i++) {
    addNewProduct(
        Number(localStorage.key(i)),
        Number(localStorage.getItem(localStorage.key(i)))
    );
}

const amountControls = document.querySelectorAll(".product__quantity-controls");
amountControls.forEach((control) => {
    const amount = control.querySelector(".product__quantity-value");

    const decreaseButton = control.querySelector(".product__quantity-control_dec");
    decreaseButton.onclick = function () {
        if (amount.textContent > 1) { amount.textContent = Number(amount.textContent) - 1 }
    }
    const increaseButton = control.querySelector(".product__quantity-control_inc");
    increaseButton.onclick = function () {
        amount.textContent = Number(amount.textContent) + 1;
    }
})

const addInCartButtons = document.querySelectorAll(".product__add");
addInCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.closest(".product");

        const productId = product.dataset.id
        const amountToAdd = product.querySelector(".product__quantity-value");
        addProduct(productId, Number(amountToAdd.textContent));

        amountToAdd.textContent = 1;
    })
})

const addProduct = (productId, amountToAdd) => {
    const product = products.querySelector(`[data-id='${productId}']`);
    const productExisting = cart.querySelector(`[data-id='${productId}']`);

    if (!productExisting) {
        addNewProduct(productId, amountToAdd);
    } else {
        const currentLocalAmount = localStorage.getItem(productId);
        const currentCartAmount = productExisting.querySelector(".cart__product-count");
        currentCartAmount.textContent = Number(currentCartAmount.textContent) + amountToAdd;
        localStorage.setItem(productId, Number(currentLocalAmount) + amountToAdd);
    }
}



