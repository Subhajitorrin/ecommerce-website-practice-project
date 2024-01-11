const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function getData() {
    let result = await client.connect();
    let db = result.db('productDetails');
    let collection = db.collection('productDetails');
    let response = await collection.find({}).toArray();
    console.log(response);
    appendCart(response[0].img, response[0].name, response[0].price)
}
getData();

function appendCart(img, name, price) {
    // let ParentCart = document.querySelector("#cartCardsParent");

    // Create the outer card element
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // Create the card-img-name-container
    const imgNameContainerDiv = document.createElement('div');
    imgNameContainerDiv.classList.add('card-img-name-container');

    // Create the card-img-container
    const imgContainerDiv = document.createElement('div');
    imgContainerDiv.classList.add('card-img-container');

    // Create the image element
    const imgElement = document.createElement('img');
    imgElement.src = `${img}`;
    imgElement.alt = '';

    // Append the image element to the imgContainerDiv
    imgContainerDiv.appendChild(imgElement);

    // Create the prodname element
    const prodnameDiv = document.createElement('div');
    prodnameDiv.classList.add('prodname');
    prodnameDiv.textContent = `${name}`;

    // Append imgContainerDiv and prodnameDiv to imgNameContainerDiv
    imgNameContainerDiv.appendChild(imgContainerDiv);
    imgNameContainerDiv.appendChild(prodnameDiv);

    // Append imgNameContainerDiv to cardDiv
    cardDiv.appendChild(imgNameContainerDiv);

    // Create the card-cross element
    const cardCrossDiv = document.createElement('div');
    cardCrossDiv.classList.add('card-cross');

    // Create the price paragraph element
    const priceParagraph = document.createElement('p');
    priceParagraph.classList.add('price');
    priceParagraph.innerHTML = `<b>${price}INR</b>`;

    // Create the div element with the cross icon
    const crossIconDiv = document.createElement('div');
    crossIconDiv.innerHTML = '<i class="bx bx-x"></i>';

    // Append priceParagraph and crossIconDiv to cardCrossDiv
    cardCrossDiv.appendChild(priceParagraph);
    cardCrossDiv.appendChild(crossIconDiv);

    // Append cardCrossDiv to cardDiv
    cardDiv.appendChild(cardCrossDiv);

    // Append the cardDiv to the body or any other container element
    // document.ParentCart.appendChild(cardDiv);
    console.log(cardDiv);
}