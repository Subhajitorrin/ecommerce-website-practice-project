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
    // priceCalculationOfCart();

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
        const cardContainer = document.createElement('div');
        cardContainer.className = 'home-cards';

        const imgContainer = document.createElement('div');
        imgContainer.className = 'home-img-container';
        const imgElement = document.createElement('img');
        imgElement.src = img;
        imgContainer.appendChild(imgElement);

        const productNameElement = document.createElement('div');
        productNameElement.className = 'home-product-name';
        productNameElement.innerHTML = `<b>${name}</b>`;

        const productPriceElement = document.createElement('div');
        productPriceElement.className = 'home-product-price';
        productPriceElement.textContent = price;

        const addToCartBtn = document.createElement('button');
        addToCartBtn.className = 'add-to-cart-btn';
        addToCartBtn.textContent = 'Add to cart';

        // Append elements to the card container
        cardContainer.appendChild(imgContainer);
        cardContainer.appendChild(productNameElement);
        cardContainer.appendChild(productPriceElement);
        cardContainer.appendChild(addToCartBtn);

        return cardContainer;
    }
}


// add to cart
{
    function getDataOfHomeCards() {
        let homeCards = document.querySelectorAll(".home-cards")
        homeCards.forEach((card) => {
            card.addEventListener('click', () => {
                let details=getHomeProductDetails(card);
                // let cartCardsParent=document.querySelector("#cartCardsParent");
                appendCardCart(details.imgSrc,details.name,details.price)
            })
        })
    }
}

// append cart cards [append child to left]
function appendCardCart(img, name, price) {
    // Create card container
    var card = document.createElement("div");
    card.classList.add("card");

    // Create card content
    card.innerHTML = `
        <div class="card-img-name-container">
            <div class="card-img-container"><img src="${img}" alt=""></div>
            <div class="prodname">${name}</div>
        </div>
        <div class="card-cross">
            <p class="price"><b>${price}INR</b></p>
            <div><i class='bx bx-x'></i></div>
        </div>
    `;

    // Append the card to the container
    document.querySelector("#cartCardsParent").appendChild(card);
}

// get img name price of home product
function getHomeProductDetails(card) {
    var imgContainer = card.querySelector(".home-img-container");
    var imgElement = imgContainer.querySelector("img");
    var imgSrc = imgElement.src;

    let name = card.querySelector(".home-product-name").innerText;

    let price = card.querySelector(".home-product-price").innerText;
    return { imgSrc, name, price };
}