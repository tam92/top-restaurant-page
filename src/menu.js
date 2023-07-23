import data from './data.xml';

export default function renderMenu () {

    const div = document.createElement("div");
    div.setAttribute("class", "mainSection");
    div.appendChild(getMenuData());

    return div;
}

function getMenuData() {
    const itemDiv = document.createElement("div");
    const items = data.menu.item;
    if (items) {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            // get the values
            const name = item.name[0];
            const price = item.price[0];
            const description = item.description[0];
            const image = item.imageSource[0];
            itemDiv.appendChild(appendMenuItem(name, price, description, image));
            }
        }
        return itemDiv;
    }

function appendMenuItem(name, price, description, imageSource) {
    // title
    const pTitle = document.createElement('p');
    pTitle.innerHTML = name;

    // price
    const pPrice = document.createElement('p');
    pPrice.innerHTML = price;

    // desc
    const pDescription = document.createElement('p');
    pDescription.innerHTML = description;

    // img
    const img = document.createElement('img');
    img.setAttribute("src", imageSource);

    // div
    const div = document.createElement('div');
    div.appendChild(pTitle);
    div.appendChild(pPrice);
    div.appendChild(pDescription);
    div.appendChild(img);

    return div;
}