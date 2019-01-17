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

    grandTotal += product.price;
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
        const foundProduct = products.find(shoppingCart => {
            return *find some way to pull the product id* === shoppingCart.id;
        }
    if 
    const indexToRemove = parseInt(event.target.id);
    shoppingCart.splice(indexToRemove, 1);
    displayShoppingCart();
    });
  }
};
