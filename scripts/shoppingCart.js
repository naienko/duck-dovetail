const shoppingCart = [];

const displayShoppingCart = () => {
  const cartEl = document.querySelector("#cartItems");
  cartEl.innerHTML = "";

  let grandTotal = 0;
  let evenOdd = "";
  shoppingCart.forEach((product, idx) => {
// inserted a line in index.html as column header for shopping cart
  if (idx % 2 === 0) {
    evenOdd = "even";
  } else {
    evenOdd = "odd";
  }
    cartEl.innerHTML += `
        <section class="shoppingCart__item ${evenOdd}">
        <div class="cart__name">${product.name}</div>
        <div>${product.quant}</div>
        <div>${product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })}</div>

        <div class="cart_button"><button id="${idx}" class="cart_removeButton">--</button></div>
        <div class="cart_button"><button id="${idx}_all" class="cart_removeAllButton">del</button></div>
        </section>
        `;
// more complex logic would be needed if you wanted to multiply the price inline in the cart; this works for cart total
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
// use the index that is linked to the button to pull the specific object out of the shoppingcart array
      const currentProduct = shoppingCart[itemIndex];
// check the value of the quant key; if greater than 1 deincrement
      if (currentProduct.quant > 1) {
        currentProduct.quant--;
      } else if (currentProduct.quant === 1) {
// if there's ONLY 1 'copy' of the object in the cart, REMOVE the key, then remove the object from the cart
// IMPORTANT you must EITHER remove the key/value, or deincrement it to 0
// not sure what would happen if you deincremented it to 0, test later? -- LATER since changing the 'add product' button to look for the existence of the key/value, MUST remove property in order to be able to add it (and whole object) back later
        delete currentProduct.quant;
        shoppingCart.splice(itemIndex, 1);
      }
      displayShoppingCart();
    });
  }

  const allRemoveAllButtons = document.querySelectorAll(".cart_removeAllButton");

// Add a click event listener to each button
for (const button of allRemoveAllButtons) {
  button.addEventListener("click", event => {
    const itemIndex = parseInt(event.target.id);
    const currentProduct = shoppingCart[itemIndex];
    delete currentProduct.quant;
    shoppingCart.splice(itemIndex, 1);
    displayShoppingCart();
  });
};
};