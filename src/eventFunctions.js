import renderHome from './home.js';
import renderContact from './contact.js';
import renderMenu from './menu.js';

export function eventHome () {
    const main = document.getElementById("main");
    const liHome = document.getElementById("navHome");
    cleanMain(main);
    liHome.setAttribute("class", "active");
    return main.appendChild(renderHome());
 }

 export function eventMenu () {
    const main = document.getElementById("main");
    const liMenu = document.getElementById("navMenu");
    cleanMain(main, content);
    liMenu.setAttribute("class", "active");
    return main.appendChild(renderMenu());
 }

 export function eventContact () {
    const main = document.getElementById("main");
    const liContact = document.getElementById("navContact");
    cleanMain(main, content);
    
    liContact.setAttribute("class", "active");
    return main.appendChild(renderContact());
 }

 export function cleanMain (main) {
    main.innerHTML = "";   // Cleans main

    // Cleans active element style in navBar
    const home = document.getElementById("navHome");
    home.toggleAttribute("class", false);
    const menu = document.getElementById("navMenu");
    menu.toggleAttribute("class", false);
    const contact = document.getElementById("navContact");
    contact.toggleAttribute("class", false);

 }