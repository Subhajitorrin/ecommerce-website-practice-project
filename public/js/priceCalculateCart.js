function priceCalculationOfCart() {
  let price = document.querySelectorAll(".price");
  let totalPrice = 0;
  for (let i = 0; i < price.length; i++) {
    numeric_part = Number(price[i].innerText.slice(0, -3));
    totalPrice = totalPrice + numeric_part;
  }
  let totalPriceShow = document.querySelector(".totalPriceShow");
  let shopingCostShow = document.querySelector(".shopping-cost-show");
  totalPriceShow.innerHTML = `<b>${totalPrice}</b>`;
  shopingCostShow.innerHTML = `<b>${totalPrice}</b>`;
}
module.exports=priceCalculationOfCart;