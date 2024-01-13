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

// priceCalculationOfCart();
// price calculation
{
    setTimeout(() => {
        priceCalculationOfCart()
    }, 1);
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


// fetch products
{
    const jsonFilePath = '../assets/productDetails.json';
    fetch(jsonFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // code here
            let homeMainSection = document.querySelector(".home-main");
            for (let i = 0; i < data.length; i++) {
                let card = createProductCard(data[i].img, data[i].name, data[i].price);
                homeMainSection.appendChild(card);
            }
            getDataOfHomeCards();
        })

    //   function to create product cards
    function createProductCard(img, name, price) {
        const formElement = document.createElement('form');
        formElement.action = '/db';
        formElement.method = 'post';

        const cardContainer = document.createElement('div');
        cardContainer.className = 'home-cards';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'home-img-container';
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.classList.add("imgSrc");
        imgContainer.appendChild(imgElement);

        const productNameElement = document.createElement('div');
        productNameElement.className = 'home-product-name';
        productNameElement.innerHTML = `<b>${name}</b>`;

        const productPriceElement = document.createElement('div');
        productPriceElement.textContent = price;

        const addToCartBtn = document.createElement('input');
        addToCartBtn.type = 'submit';
        addToCartBtn.value = 'Add to cart';
        addToCartBtn.className = 'add-to-cart-btn';

        // Append elements to the card container
        cardContainer.appendChild(imgContainer);
        cardContainer.appendChild(productNameElement);
        cardContainer.appendChild(productPriceElement);
        cardContainer.appendChild(addToCartBtn);

        formElement.appendChild(cardContainer);

        // hidden inputs
        // productimage link
        const hiddenInputImg = document.createElement('input');
        hiddenInputImg.type = 'hidden';
        hiddenInputImg.name = 'imgSrc';
        hiddenInputImg.value = imgElement.src;
        formElement.appendChild(hiddenInputImg)

        // product name
        const hiddenInputName = document.createElement('input');
        hiddenInputName.type = 'hidden';
        hiddenInputName.name = 'productName';
        hiddenInputName.value = productNameElement.innerText;
        formElement.appendChild(hiddenInputName)

        // product price
        const hiddenInputPrice = document.createElement('input');
        hiddenInputPrice.type = 'hidden';
        hiddenInputPrice.name = 'price';
        hiddenInputPrice.value = productPriceElement.textContent;
        formElement.appendChild(hiddenInputPrice)

        return formElement;
    }

}
