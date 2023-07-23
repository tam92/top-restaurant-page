import Restaurant from './img/restaurant.jpg';

export default function renderHome () {

    const div = document.createElement("div");
    div.setAttribute("class", "mainSection");

    // Add the image to the page
    const myImg = new Image();
    myImg.src = Restaurant;
    div.appendChild(myImg);


    // Show which navBar element is active
    const navHome = document.getElementById("navHome");
    navHome.setAttribute("class", "active");

    return div;
}