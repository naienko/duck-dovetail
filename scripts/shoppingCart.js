const shoppingCart = [];

const displayShoppingCart = () => {
  const cartEl = document.querySelector("#cartItems");
  cartEl.innerHTML = "";

  let grandTotal = 0;

  shoppingCart.forEach((product, idx) => {
    cartEl.innerHTML += `
        <section class="shoppingCart__item">
        <div>${product.name}</div>
        <div>${product.quant}</div>
        <div>${product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}</div>

        <button id="${idx}" class="cart_removeButton">Remove</button>
        </section>
        `;

    grandTotal += product.price * product.quant;
  });

  cartEl.innerHTML += `
      <h3>You owe us: ${grandTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      })}</h3>
    `;

  // Get a reference to all purchase buttons
  const allRemoveButtons = document.querySelectorAll(".cart_removeButton");

  // Add a click event listener to each button
  for (const button of allRemoveButtons) {
    button.addEventListener("click", event => {
        const itemIndex = parseInt(event.target.id);

        const currentProduct = shoppingCart[itemIndex];

        if (currentProduct.quant > 1) {
            currentProduct.quant--;
        } else if (currentProduct.quant === 1) {
            delete currentProduct.quant;
            shoppingCart.splice(itemIndex, 1);
        }
        console.log(shoppingCart);
        displayShoppingCart();
    });
  }
};
