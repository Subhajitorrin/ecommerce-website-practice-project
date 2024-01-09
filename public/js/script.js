// menu button click
{
    let menubtn = document.querySelector('.menu');
    menubtn.addEventListener('click', () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.add('active-navbar');
    })
    let crossbtn = document.querySelector('.cross');
    crossbtn.addEventListener('click', () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.remove('active-navbar');
    })
}


// price calculation
{
    function priceCalculationOfCart() {
        let price = document.querySelectorAll('.price');
        let totalPrice = 0
        for (let i = 0; i < price.length; i++) {
            numeric_part = Number(price[i].innerText.slice(0, -3));
            totalPrice = totalPrice + numeric_part;
        }
        let totalPriceShow = document.querySelector(".totalPriceShow")
        let shopingCostShow = document.querySelector(".shopping-cost-show")
        totalPriceShow.innerHTML = `<b>${totalPrice}</b>`;
        shopingCostShow.innerHTML = `<b>${totalPrice}</b>`;
    }
    priceCalculationOfCart();

    // remove card
    let cardCrossList = document.querySelectorAll('.card-cross')
    cardCrossList.forEach(function (cardCross) {
        cardCross.addEventListener('click', (e) => {
            let card = cardCross.parentElement;
            card.remove();
            priceCalculationOfCart();
        })
    });
}
